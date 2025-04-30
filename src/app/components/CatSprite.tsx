import catTexture from "../../../public/cat.png"
import { useTick } from "@pixi/react"
import { useRef, useState, useEffect } from "react";
import { Texture, Assets, Sprite } from "pixi.js";

export default function CatSprite() {
    const pixiSprite = useRef<Sprite>(null);

    const [texture, setTexture] = useState(Texture.EMPTY)
    const [x, setX] = useState(50)
    const [reversed, setReversed] = useState(false);

    const speed = 2

    useTick(() => {
        console.log(x)
        if (x === 796) {
            // setReversed(true)
            // console.log(x, reversed)
        }
        if (x === 550) {
            setReversed(false)
        }
        
        if (reversed) {
            // setX((prev) => (prev - speed) % 800);
        } else {
            setX((prev) => (prev + speed) % 800);
        }

 
    })

    useEffect(() => {
        if (texture === Texture.EMPTY) {
            Assets
                .load(catTexture)
                .then((result) => {
                    setTexture(result)
                });
        }
    }, [texture])

    return (
        <pixiSprite ref={pixiSprite} 
                    texture={texture}
                    anchor={{ x: 0.5, y: 0.5}}
                    x={x} 
                    scale={{ y: 1, x: reversed ? -1 : 1 }}
                    y={250}
                    interactive={true}
                    onPointerDown={() => console.log('Кликнули')} />
    )
}