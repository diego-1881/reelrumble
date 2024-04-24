import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function handleEscape(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", function (e) {
        handleEscape(e);
      });

      return () => {
        document.removeEventListener("keydown", function (e) {
          handleEscape(e);
        });
      };
    },
    [action, key]
  );
}
