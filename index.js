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
		let current = this.root
		while(true){
			if(value === current.data){
				if(current === this.root){
					this.root = null;
				}
				break;
			}

			if (value > current.data){
				if(current.right.data === value){
					break;
				}
				else{
					current = current.right;
				};
			}
			else{
				if(current.left.data === value){
					break;
				}
				else{
					current = current.left;
				};
			}; 
		};	
		if(current.right){
			if(value === current.right.data){
				if(current.right.right === null){
					current.right = current.right.left;
					return;
				}
				else{
					const targetLeftCopy = current.right.left;
					current.right = current.right.right;
					current.right.left = targetLeftCopy;
					return;
				};
			};
		};
		if(current.left){
			if(value === current.left.data){
				if(current.left.right === null){
					current.left = current.left.left;
					return;
				}
				else{
					const targetLeftCopy = current.left.left;
					current.left = current.left.right;
					current.left.left = targetLeftCopy;
					return;
				};
			}
		}
	}
	find(value){
		let current = this.root
		while(true){
			if (value > current.data){
				if(current.right.data === value){
					break;
				}
				else{
					current = current.right;
				};
			}
			else{
				if(current.left.data === value){
					break;
				}
				else{
					current = current.left;
				};
			}; 
		};	
		if(current.right.data === value){
			return current.right;
		}
		else{
			return current.left;
		}
	}
	levelOrderForEach(callback){
		const queue = [];
		if(this.root){
			queue.push(this.root)
		}
		while(queue.length > 0){
			callback(queue[0]);	
			if(queue[0].left !== null){
				queue.push(queue[0].left);
			}
			if(queue[0].right !== null){
				queue.push(queue[0].right);
			}
			queue.shift();
		}
	};
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

prettyPrint(tree.root)


console.log("running delete item");

prettyPrint(tree.root)



