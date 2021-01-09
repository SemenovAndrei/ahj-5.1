/**
 * @class Popovers
 */
export default class Popovers {
  /**
   * Add this.elements
   *
   * @param {class} elements - Elements
   */
  constructor(elements) {
    this.elements = elements;
  }

  /**
   * Init
   */
  init() {
    this.elements.init();
    this.addListeners();
  }

  /**
   * Add listeners
   */
  addListeners() {
    this.elements.content.addEventListener('click', (e) => this.logicTooltip(e));
  }

  /**
   * Function handler to event
   *
   * @param {event} e - Click event
   */
  logicTooltip(e) {
    e.preventDefault();

    if (!e.target.classList.contains('button')) {
      return;
    }

    if (e.target.classList.contains('button-active')) {
      this.hideTooltip(e.target);
    } else {
      this.resetButtons();
      this.clearTooltipClasses();
      this.showTooltip(e.target);
    }
  }

  /**
   * Remove class .button-active
   */
  resetButtons() {
    const buttons = this.elements.content.querySelectorAll('.button');
    buttons.forEach((e) => e.classList.remove('button-active'));
  }

  /**
   * Show tooltip
   *
   * @param {button} button - active button
   */
  showTooltip(button) {
    button.classList.add('button-active');
    this.setParamTooltip(button);
  }

  /**
   * Hide tooltip
   *
   * @param {button} button - active button
   */
  hideTooltip(button) {
    button.classList.remove('button-active');
    this.tooltip.removeAttribute('style');
    this.tooltip.innerHTML = '';
    this.clearTooltipClasses();
  }

  /**
   * Clear tooltip class
   */
  clearTooltipClasses() {
    const tooltips = this.elements.content.getElementsByClassName('tooltip');
    tooltips.forEach((e) => {
      const result = [...e.classList].filter((el) => el.startsWith('tooltip-arrow'));

      if (result.length) {
        this.tooltip.classList.remove(...result);
      }
    });
  }

  /**
   * Set parameters for tooltip
   *
   * @param {button} button - active button
   */
  setParamTooltip(button) {
    const tooltip = button.nextElementSibling;
    tooltip.appendChild(this.elements.popover);

    let top = null;
    let left = null;

    const buttonValue = button.getBoundingClientRect();
    const tooltipValue = tooltip.getBoundingClientRect();

    if (button.classList.contains('button-top')) {
      top = 15;
      left = buttonValue.width / 2 - tooltipValue.width / 2;
      tooltip.classList.add('tooltip-arrow-top');
      tooltip.style.setProperty('--widthCenter', `${tooltipValue.width / 2 - 15}px`);
    }

    if (button.classList.contains('button-bottom')) {
      top = -buttonValue.height - tooltipValue.height - 15;
      left = buttonValue.width / 2 - tooltipValue.width / 2;
      tooltip.classList.add('tooltip-arrow-bottom');
      tooltip.style.setProperty('--widthCenter', `${tooltipValue.width / 2 - 15}px`);
    }

    if (button.classList.contains('button-left')) {
      top = -buttonValue.height / 2 - tooltipValue.height / 2;
      left = buttonValue.width + 15;
      tooltip.classList.add('tooltip-arrow-left');
      tooltip.style.setProperty('--heightCenter', `${tooltipValue.height / 2 - 15}px`);
    }

    if (button.classList.contains('button-right')) {
      top = -buttonValue.height / 2 - tooltipValue.height / 2;
      left = -tooltipValue.width - 15;
      tooltip.classList.add('tooltip-arrow-right');
      tooltip.style.setProperty('--heightCenter', `${tooltipValue.height / 2 - 15}px`);
    }

    tooltip.style.transform = `translate(${left}px, ${top}px)`;
    this.tooltip = tooltip;
  }
}
