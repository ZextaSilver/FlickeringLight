class BombHB extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.body.onCollide = true;
    }

    update(){

    }

    reset(){
        this.x = -300;
        this.y = -300;
        this.setVisible(false);
    }

    activate(){
        this.setVisible(true);
    }

}