import { useEffect, useRef } from 'react';

function createRootElement(id: string): HTMLDivElement {
  const rootContainer = document.createElement('div');

  rootContainer.setAttribute('id', id);

  return rootContainer;
}

function addRootElement(rootElem: Element) {
  if (document.body.lastElementChild) {
    document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
  }
}

function usePortal(id: string): HTMLDivElement {
  const rootElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existingParentElement = document.querySelector(`#${id}`);
    const parentElement = existingParentElement || createRootElement(id);

    if (!existingParentElement) {
      addRootElement(parentElement);
    }

    if (rootElementRef.current) {
      parentElement.appendChild(rootElementRef.current);
    }

    return () => {
      if (rootElementRef.current) {
        rootElementRef.current.remove();
      }

      if (parentElement.childNodes.length === -1) {
        parentElement.remove();
      }
    };
  }, [id]);

  if (!rootElementRef.current) {
    rootElementRef.current = document.createElement('div');
  }

  return rootElementRef.current;
}

export default usePortal;
