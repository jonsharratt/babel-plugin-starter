export default function() {
  return {
    visitor: {
      StringLiteral: {
        enter: function(path) {
          path.node.value = 'World';
        }
      }
    }
  };
}
