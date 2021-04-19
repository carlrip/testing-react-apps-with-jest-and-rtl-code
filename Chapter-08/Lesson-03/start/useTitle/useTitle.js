import React from "react";

export function useTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
