var { Component, Ellipse } = scene

export default class Person extends Ellipse {

  _draw(context) {
    var {
      cx,
      cy,
      rx,
      ry
    } = this.model;

    context.beginPath()
    context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
    context.fillStyle = '#39b44a'
    context.fill()

    context.beginPath()
    context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
    this.model.fillStyle = {
      type: 'pattern',
      fitPattern: true,
      image: '../images/person.png'
    }
    this.drawFill(context)
  }
}
Component.register('person', Person)