window.theme = window.theme || {}

/* ================ SLATE ================ */
window.theme = window.theme || {}

window.theme.sizes = {
  mobile: 749,
  small: 750,
  large: 990,
  widescreen: 1400,
}

window.theme.focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

window.theme.keyboardKeys = {
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32,
  LEFTARROW: 37,
  RIGHTARROW: 39,
}

window.theme.utils = {
  /**
   * Get all focusable elements within a container
   * @param {HTMLElement} container
   * @return {HTMLElement[]}
   */
  getFocusableElements(container) {
    return Array.from(container.querySelectorAll(window.theme.focusable))
  },

  /**
   * Removes the focus ring for mouse users
   */
  removeFocusHash() {
    try {
      const element = document.getElementById(location.hash.substr(1))
      if (element) {
        element.focus()
      }
    } catch (error) {
      console.warn("Invalid hash selector", error)
    }
  },
}

window.theme.a11y = {
  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {HTMLElement} element - The element to be acted upon
   */
  pageLinkFocus: (element) => {
    var focusClass = "js-focus-hidden"

    element.first().attr("tabIndex", "-1").focus().addClass(focusClass).one("blur", callback)

    function callback() {
      element.first().removeClass(focusClass).removeAttr("tabindex")
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function () {
    var hash = window.location.hash

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus(document.getElementById(hash.slice(1)))
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function () {
    
    document.querySelectorAll("a[href*=#]").forEach((link) => {
      link.addEventListener("click", (evt) => {
        var targetElement = document.getElementById(evt.currentTarget.hash.slice(1))
        if (targetElement) {
          this.pageLinkFocus(targetElement)
        }
      })
    })
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {HTMLElement} options.container - Container to trap focus within
   * @param {HTMLElement} options.elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: (options) => {
    var eventsName = {
      focusin: options.namespace ? "focusin." + options.namespace : "focusin",
      focusout: options.namespace ? "focusout." + options.namespace : "focusout",
      keydown: options.namespace ? "keydown." + options.namespace : "keydown.handleFocus",
    }

    /**
     * Get every possible visible focusable element
     */
    var focusableElements = options.container.querySelectorAll(window.theme.focusable)
    var firstFocusable = focusableElements[0]
    var lastFocusable = focusableElements[focusableElements.length - 1]

    if (!options.elementToFocus) {
      options.elementToFocus = options.container
    }

    function _manageFocus(evt) {
      if (evt.keyCode !== window.theme.keyboardKeys.TAB) return

      /**
       * On the last focusable element and tab forward,
       * focus the first element.
       */
      if (evt.target === lastFocusable && !evt.shiftKey) {
        evt.preventDefault()
        firstFocusable.focus()
      }
      /**
       * On the first focusable element and tab backward,
       * focus the last element.
       */
      if (evt.target === firstFocusable && evt.shiftKey) {
        evt.preventDefault()
        lastFocusable.focus()
      }
    }

    options.container.setAttribute("tabindex", "-1")
    options.elementToFocus.focus()

    document.removeEventListener("focusin")

    document.addEventListener(eventsName.keydown, _manageFocus)

    document.addEventListener(eventsName.focusout, () => {
      document.removeEventListener(eventsName.keydown)
    })

    document.addEventListener(eventsName.focusin, (evt) => {
      if (options.container !== evt.target && !options.container.contains(evt.target)) {
        options.container.focus()
      }
    })
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {HTMLElement} options.container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: (options) => {
    var eventName = options.namespace ? "focusin." + options.namespace : "focusin"

    if (options.container) {
      options.container.removeAttribute("tabindex")
    }

    document.removeEventListener(eventName)
  },

  /**
   * Add aria-describedby attribute to external and new window links
   *
   * @param {object} options - Options to be used
   * @param {object} options.messages - Custom messages to be used
   * @param {HTMLElement[]} options.links - Specific links to be targeted
   */
  accessibleLinks: (options) => {
    var body = document.querySelector("body")

    var idSelectors = {
      newWindow: "a11y-new-window-message",
      external: "a11y-external-message",
      newWindowExternal: "a11y-new-window-external-message",
    }

    if (options.links === undefined) {
      options.links = document.querySelectorAll("a[href]:not([aria-describedby])")
    }

    function generateHTML(customMessages) {
      if (typeof customMessages !== "object") {
        customMessages = {}
      }

      var messages = Object.assign(
        {
          newWindow: "Opens in a new window.",
          external: "Opens external website.",
          newWindowExternal: "Opens external website in a new window.",
        },
        customMessages,
      )

      var container = document.createElement("ul")
      var htmlMessages = ""

      for (var message in messages) {
        htmlMessages += "<li id=" + idSelectors[message] + ">" + messages[message] + "</li>"
      }

      container.setAttribute("hidden", true)
      container.innerHTML = htmlMessages

      body.appendChild(container)
    }

    function _externalSite(link) {
      var hostname = window.location.hostname

      return link.hostname !== hostname
    }

    options.links.forEach((link) => {
      var target = link.getAttribute("target")
      var rel = link.getAttribute("rel")
      var isExternal = _externalSite(link)
      var isTargetBlank = target === "_blank"

      if (isExternal) {
        link.setAttribute("rel", (i, val) => {
          if (val === undefined || val === null) {
            return "noopener"
          } else {
            return val + " noopener"
          }
        })
      }

      if (isTargetBlank && isExternal) {
        link.setAttribute("aria-describedby", idSelectors.newWindowExternal)
      } else if (isTargetBlank) {
        link.setAttribute("aria-describedby", idSelectors.newWindow)
      } else if (isExternal) {
        link.setAttribute("aria-describedby", idSelectors.external)
      }
    })

    generateHTML(options.messages)
  },
}

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

window.theme.Images = (() => {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === "string") {
      images = [images]
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i]
      this.loadImage(this.getSizedImageUrl(image, size))
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path
  }

  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src)
    var imageUrl = this.getSizedImageUrl(image, size)

    if (callback) {
      callback(imageUrl, image, element) // eslint-disable-line callback-return
    } else {
      element.src = imageUrl
    }
  }

  /**
   * +++ Useful
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|\d{0,4}x\d{1,4}|x\d{1,4})[_\\.@]/,
    )

    if (match !== null) {
      if (match[2] !== undefined) {
        return match[1] + match[2]
      } else {
        return match[1]
      }
    } else {
      return null
    }
  }

  /**
   * +++ Useful
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src
    }

    if (size === "master") {
      return this.removeProtocol(src)
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i)

    if (match !== null) {
      var prefix = src.split(match[0])
      var suffix = match[0]

      return this.removeProtocol(prefix[0] + "_" + size + suffix)
    }

    return null
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, "")
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol,
  }
})()

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

window.theme.Currency = (() => {
  var moneyFormat = "${{amount}}" // eslint-disable-line camelcase

  function formatMoney(cents, format) {
    if (typeof cents === "string") {
      cents = cents.replace(".", "")
    }
    var value = ""
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/
    var formatString = format || moneyFormat

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ","
      decimal = decimal || "."

      if (isNaN(number) || number === null) {
        return 0
      }

      number = (number / 100.0).toFixed(precision)

      var parts = number.split(".")
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands)
      var centsAmount = parts[1] ? decimal + parts[1] : ""

      return dollarsAmount + centsAmount
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case "amount":
        value = formatWithDelimiters(cents, 2)
        break
      case "amount_no_decimals":
        value = formatWithDelimiters(cents, 0)
        break
      case "amount_with_comma_separator":
        value = formatWithDelimiters(cents, 2, ".", ",")
        break
      case "amount_no_decimals_with_comma_separator":
        value = formatWithDelimiters(cents, 0, ".", ",")
        break
      case "amount_no_decimals_with_space_separator":
        value = formatWithDelimiters(cents, 0, " ")
        break
      case "amount_with_apostrophe_separator":
        value = formatWithDelimiters(cents, 2, "'")
        break
    }

    return formatString.replace(placeholderRegex, value)
  }

  return {
    formatMoney: formatMoney,
  }
})()

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

window.theme.Variants = (() => {
  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container
    this.product = options.product
    this.singleOptionSelector = options.singleOptionSelector
    this.originalSelectorId = options.originalSelectorId
    this.enableHistoryState = options.enableHistoryState
    this.currentVariant = this._getVariantFromOptions()

    this.$container.querySelectorAll(this.singleOptionSelector).forEach(
      function (element) {
        element.addEventListener("change", this._onSelectChange.bind(this))
      }.bind(this),
    )
  }

  Variants.prototype = {
    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function () {
      var currentOptions = Array.from(this.$container.querySelectorAll(this.singleOptionSelector)).map((element) => {
        var type = element.getAttribute("type")
        var currentOption = {}

        if (type === "radio" || type === "checkbox") {
          if (element.checked) {
            currentOption.value = element.value
            currentOption.index = element.dataset.index

            return currentOption
          } else {
            return false
          }
        } else {
          currentOption.value = element.value
          currentOption.index = element.dataset.index

          return currentOption
        }
      })

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = currentOptions.filter((option) => option !== false)

      return currentOptions
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function () {
      var selectedValues = this._getCurrentOptions()
      var variants = this.product.variants

      var found = variants.find((variant) => selectedValues.every((values) => variant.options.includes(values.value)))

      return found
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function () {
      var variant = this._getVariantFromOptions()

      this.$container.dispatchEvent(
        new CustomEvent("variantChange", {
          detail: { variant: variant },
        }),
      )

      if (!variant) {
        return
      }

      this._updateMasterSelect(variant)
      this._updateImages(variant)
      this._updatePrice(variant)
      this._updateSKU(variant)
      this.currentVariant = variant

      if (this.enableHistoryState) {
        this._updateHistoryState(variant)
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function (variant) {
      var variantImage = variant.featured_image || {}
      var currentVariantImage = this.currentVariant.featured_image || {}

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return
      }

      this.$container.dispatchEvent(
        new CustomEvent("variantImageChange", {
          detail: { variant: variant },
        }),
      )
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function (variant) {
      if (
        variant.price === this.currentVariant.price &&
        variant.compare_at_price === this.currentVariant.compare_at_price
      ) {
        return
      }

      this.$container.dispatchEvent(
        new CustomEvent("variantPriceChange", {
          detail: { variant: variant },
        }),
      )
    },

    /**
     * Trigger event when variant sku changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantSKUChange
     */
    _updateSKU: function (variant) {
      if (variant.sku === this.currentVariant.sku) {
        return
      }

      this.$container.dispatchEvent(
        new CustomEvent("variantSKUChange", {
          detail: { variant: variant },
        }),
      )
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: (variant) => {
      if (!history.replaceState || !variant) {
        return
      }

      var newurl =
        window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + variant.id
      window.history.replaceState({ path: newurl }, "", newurl)
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function (variant) {
      this.$container.querySelector(this.originalSelectorId).value = variant.id
    },
  }

  return Variants
})()
