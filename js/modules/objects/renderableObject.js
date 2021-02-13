
class RenderableObject {
    constructor (x = 0, y = 0, width = 10, height = 10, color = "white") {
        this.x = x;
        this.y = y;

        this.color = color

        this.width = width;
        this.height = height;
    }

    getPosition () {
        return [this.x, this.y];
    }

    // positions
    getRightSidePosition () {
        return this.x + this.width
    }

    getLeftSidePosition () {
        return this.x
    }

    getBottomSidePosition () {
        return this.y + this.height
    }

    getTopSidePosition () {
        return this.y
    }
    
    // corner positions
    getTopLeftCorner (xMargin=0, yMargin=0) {
        return [this.getLeftSidePosition() + xMargin, this.getTopSidePosition() + yMargin]
    }

    getTopRightCorner (xMargin=0, yMargin=0) {
        return [this.getRightSidePosition() + xMargin, this.getTopSidePosition() + yMargin]
    }

    getBottomRightCorner (xMargin=0, yMargin=0) {
        return [this.getRightSidePosition() + xMargin, this.getBottomSidePosition() + yMargin]
    }

    getBottomLeftCorner (xMargin=0, yMargin=0) {
        return [this.getLeftSidePosition() + xMargin, this.getBottomSidePosition() + yMargin]
    }


    isOverCoordinate ([x, y], xMargin=null, yMargin=null) {
        if (x >= this.getLeftSidePosition(xMargin, yMargin)
            && x <= this.getRightSidePosition(xMargin, yMargin)
            && y >= this.getTopSidePosition(xMargin, yMargin)
            && y <= this.getBottomSidePosition(xMargin, yMargin)) {
            return true
        }

        return false
    }

    isTouchingObject(obj, xMargin=null, yMargin=null) {
        var self = this
        if (self.isOverCoordinate(obj.getTopLeftCorner(), xMargin, yMargin)) {
            return true
        }

        // check top right corner
        if (self.isOverCoordinate(obj.getTopRightCorner(), xMargin, yMargin)) {
            return true
        }

        // check bottom right corner
        if (self.isOverCoordinate(obj.getBottomRightCorner(), xMargin, yMargin)) {
            return true
        }

        // check bottom left corner
        if (self.isOverCoordinate(obj.getBottomLeftCorner(), xMargin, yMargin)) {
            return true
        }

        return false
    }

    renderNode () {
        var node = document.createElement("div");
        node.className = "player"

        node.style.left = this.x;
        node.style.top = this.y;
        node.style.width = this.width;
        node.style.height = this.height;
        node.style.backgroundColor = this.color;

        return node;
    }

}
