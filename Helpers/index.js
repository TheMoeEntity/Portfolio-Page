export function animate(element,revealpoint=150) {
    let height = window.innerHeight
    // let width = container.current.children[2].children[0]

    // let revealTop = width.getBoundingClientRect().top;
    let revealTop = element.getBoundingClientRect().top
    // let revealpoint = 150
  
    if (revealTop < height - revealpoint) { 
      element.classList.add(styles.addWidth)
      container.current.classList.remove(styles.skills)
    } else {
      width.classList.remove(styles.addWidth)
      container.current.classList.add(styles.skills)
    }
}