
class Player extends RenderableObject {
    constructor (x = 0, y = 0, width = 10, height = 10, color = "white", dWidth = 1, dHeight = 1) {
        super(x, y, width, height, color)

        this.dWidth = dWidth;
        this.dHeight = dHeight;
    }

    touchingObects (xMargin=null, yMargin=null) {
        var self = this;
        var returnList = []
        worldObjects.forEach(function (obj) {
            if (obj.isOverCoordinate(self.getTopLeftCorner(xMargin, yMargin)) ||
                obj.isOverCoordinate(self.getTopRightCorner(xMargin, yMargin)) ||
                obj.isOverCoordinate(self.getBottomRightCorner(xMargin, yMargin)) ||
                obj.isOverCoordinate(self.getBottomLeftCorner(xMargin, yMargin))) {
                returnList.push(obj)
            }
        })
        return returnList
    }

    move (direction) {
        var speed = 1;
        if (" " in keysPressed) {
            speed = 2;
        }

        var objsToLeft = player1.touchingObects(-2, 0)
        var objsToTop = player1.touchingObects(0, -2)
        var objsToRight = player1.touchingObects(2, 0)
        var objsToBottom = player1.touchingObects(0, 2)

        switch (direction) {
            case "right":
                if (objsToRight.length === 0 && this.x < (canvas.clientWidth - this.width)) {
                    this.x = this.x + this.dWidth * speed;
                }
                break;

            case "down":
                if (objsToBottom.length === 0 && this.y < (canvas.clientHeight - this.height)) {
                    this.y = this.y + this.dHeight * speed;
                }
                break;

            case "left":
                if (objsToLeft.length === 0 && this.x > this.width) {
                    this.x = this.x - this.dWidth * speed;
                }
                break;

            case "up":
                if (objsToTop.length === 0 && this.y > this.height) {
                    this.y = this.y - this.dHeight * speed;
                }
                break;
        
            default:
                break;
        }
    }
}


var movePlayer = function () {
    if ("d" in keysPressed) {
        player1.move("right")
    }

    if ("s" in keysPressed) {
        player1.move("down")
    }

    if ("a" in keysPressed) {
        player1.move("left")
    }

    if ("w" in keysPressed) {
        player1.move("up")
    }
}
