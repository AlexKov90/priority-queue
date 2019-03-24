class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right){
			return undefined;
		} else if (this.left){
			this.right = node;
			this.right.parent = this;
		} else{
			this.left = node;
			this.left.parent = this;
		}
	
	}

	removeChild(node) {
		if(node === this.left){
			this.left.parent = null;
			 this.left = null;
		}else if(node === this.right){
			this.right = null;
		}else if(node !== this.left && node !== this.right){
			throw new Error();
		}
	}

	remove() {
		this.parent && this.parent.removeChild(this);
	}

	swapWithParent() {
		if(this.parent === null){
			return;
		}
		const left = this.left;
		this.right = this.parent.right;
		this.left = this.parent;
		

		const par = this.parent.parent;
		this.parent.parent = this;

		
		
		if(this.parent.right === this) {
			this.parent.left.parent = this;
		}
		
		this.parent.left = left; 
		this.parent = par;
		
	}
	
}

module.exports = Node;
