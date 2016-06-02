var { Component, Ellipse } = scene

export default class Person extends Ellipse {

  _draw(context) {
    var {
      value = 0,
      hidden = false,
      fillStyle,
      blankStrokeStyle,
      cx, cy, rx, ry
    } = this.model;

    if(!hidden){
      context.translate(cx, cy)

      context.beginPath()

      
      context.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)

      context.moveTo(Math.cos(-rx), -ry / 2.5)
      context.lineTo(rx, ry)

      this.drawFill(context)
      this.drawStroke(context)

      context.translate(-cx, -cy)
    }
  }
}

Component.register('person', Person)
