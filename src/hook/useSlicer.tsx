//import hooks
import {useState, useEffect} from 'react';

//custom hooks for min text

export const useSlicer = (selector:string, maxLength:number):void => {

  //state for select elements
    const [elements, setElements] = useState<NodeListOf<Element> | []>([]);

    //effect for query all elements
    useEffect(() => {
        const els = document.querySelectorAll(selector);
        setElements(els);
      }, [selector]);

    //state for slice text and add dots
    useEffect(() => {
        elements.forEach((el: Element) => {
          let txt = el.textContent;
          if (txt && txt.length > maxLength) {
            el.textContent = `${txt.slice(0, maxLength)}..`;
          }
        });
      }, [elements, maxLength]);
      
}