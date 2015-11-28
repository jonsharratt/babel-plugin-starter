export default function() {
  return {
    visitor: {
      StringLiteral(path) {
        if (path.node.value === 'Hello') {
          path.node.value = 'World';
        }
      }
    }
  };
}
