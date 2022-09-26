import { useEffect, useState } from "react";
import { Soldier } from "./Soldier";



const MultiKeyControler = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [model, setModel] :any = useState(null);

  var keyPressed: any = {};


  useEffect(() => {
    
    document.addEventListener(
      "keydown",
      function (e) {
        keyPressed[e.key] = true;

        if (keyPressed.ArrowUp == true) {
          if (keyPressed.ArrowRight == true) {
            //up + right
            setTop((top) => top - 1);
            setLeft((left) => left + 1);
          } else if (keyPressed.ArrowLeft == true) {
            //up + left
            setTop((top) => top - 1);
            setLeft((left) => left - 1);
          } else {
            //setTop((top) => top - 1); // Up
            model.actions.Run?.play();
          }
        } else if (keyPressed.ArrowDown == true) {
          if (keyPressed.ArrowRight == true) {
            //down + right
            setTop((top) => top + 1);
            setLeft((left) => left + 1);
          } else if (keyPressed.ArrowLeft == true) {
            //down + left
            setTop((top) => top + 1);
            setLeft((left) => left - 1);
          } else {
            setTop((top) => top + 1); //down
          }
        } else if (keyPressed.ArrowRight == true) {
          setLeft((left) => left + 1); //right
        } else if (keyPressed.ArrowLeft == true) {
          setLeft((left) => left - 1); // left
        }
      },
      false
    );

    document.addEventListener(
      "keyup",
      function (e) {
        keyPressed[e.key] = false;
      },
      false
    );
  }, []);

  return <Soldier position={[0.025, -1.62, 0]} />;
};

export default MultiKeyControler;
