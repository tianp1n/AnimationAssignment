class Samurai {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Samurai_RUN.png"), 0, 0,
            96, 95, 16, 0.06);

        this.x = -63 * 5;
        this.y = 0;
        this.speed = 350;
    }

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024 - (38 * 5)) this.x = -63 * 5;
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}