"use client"

import { Application, extend } from "@pixi/react";
import { Sprite, Container, Graphics } from "pixi.js";
import { useRef } from "react";
import CatSprite from "./components/CatSprite";

extend({
  Container,
  Graphics,
  Sprite,
});

export default function Home() {
  const pixiContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full border-4" ref={pixiContainer} >
      <Application resizeTo={pixiContainer} >
          <pixiContainer x={250}>
              <CatSprite />
          </pixiContainer>
      </Application>
    </div>
  );
}
