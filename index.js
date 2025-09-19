class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
};

class Tree{
	constructor(arr){
		this.arr = arr;
		this.root = null;
	}
	insert(value){
		let current = this.root
		while(true){
			if (value > current.data){
				if(current.right === null){
					break;
				}
				else{
					current = current.right;
				};
			}
			else{
				if(current.left === null){
					break;
				}
				else{
					current = current.left;
				};
			}; 
		};	
		const node = new Node(value);
		if(value > current.data && current.right === null){
			current.right = node;
			return;
		}
		else{
			current.left = node;
			return;
		};
	}
	

	deleteItem(value){
		console.log("jit");
	}
}

function buildTree(arr, start, end){	
	if(start > end){
		return null
	};
	const mid = Math.floor((start + end)/2)
	const root = new Node(arr[mid]);	

	root.left = (buildTree(arr, start, mid - 1));
	root.right = (buildTree(arr, mid + 1, end));

	return root;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};


const tree = new Tree([1,2,3,4,5,6,7,8,9]);

console.log(tree.arr);

tree.root = buildTree(tree.arr, 0, tree.arr.length - 1);

tree.insert(1);

prettyPrint(tree.root);


