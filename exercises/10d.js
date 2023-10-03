function toggle(on, off1, off2) {
  const buttonOn = document.querySelector(`.js-toggleableButton${on}`)
  const buttonOff1 = document.querySelector(`.js-toggleableButton${off1}`)
  const buttonOff2 = document.querySelector(`.js-toggleableButton${off2}`)
  
  if (buttonOn.classList.contains('isToggled')) {
    buttonOn.classList.remove('isToggled');
  } else {
    buttonOn.classList.add('isToggled');
    buttonOff1.classList.remove('isToggled');
    buttonOff2.classList.remove('isToggled');
  }
}
