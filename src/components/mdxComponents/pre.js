import system from "@rebass/components/emotion";

const Pre = system(
  {
    is: "pre",
    fontSize: 1,
    m: 0
  },
  {
    overflow: "auto",
  },
  "fontFamily",
  "space",
);
Pre.displayName = "Pre";

export default Pre;
