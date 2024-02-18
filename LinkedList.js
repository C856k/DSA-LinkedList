const node1 = {
    prev: null,
    next: null,
    data: "A"
}

class LinkedList{
    constructor() {
        this.head = node1;
        this.tail = node1;
    }

    dumpList() {
        let a_node = this.head;
        while (a_node != null){
            console.log(`
            node: ${a_node.data}
            -----------
            prev: ${a_node.prev?.data}
            next: ${a_node.next?.data}
            `);

            a_node = a_node.next;
        }
    }
    addFirst(data){
        const newNode = {
            prev: null,
            next: this.head,
            data: data
        };
        if(!this.head) {
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    addLast(data) {
        const newNode = {
            prev: this.tail,
            next: null,
            data: data
        };
        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    removeLast() {
        if(!this.tail) return;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    removeFirst() {
        if(!this.head) return;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }

    removeNode(node) {
        if(node === this.head) {
            this.removeFirst();
        } else if (node === this.tail) {
            this.removeLast();
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }

    insertBeforeNode(existingNode, data){
        const newNode = {
            prev: existingNode.prev,
            next: existingNode,
            data: data
        };
        if (existingNode === this.head){
            this.head = newNode;
        } else {
            existingNode.prev.next = newNode;
        }
        existingNode.prev = newNode;
    }

    insertAfterNode(existingNode, data){
        const newNode = {
            prev: existingNode,
            next: existingNode.next,
            data: data
        };
        if(existingNode === this.tail) {
            this.tail = newNode;
        } else {
            existingNode.next.prev = newNode;
        }
        existingNode.next = newNode;
    }

    swapNodes(node1, node2) {
        if (node1 === node2) return;
        const tempPrev = node1.prev;
        const tempNext = node1.next;

        node1.prev = node2.prev;
        node1.next = node2.next;
        if(node1.prev) {
            node1.prev.next = node1;
        } else {
            this.head = node1;
        }
        if (node1.next) {
            node1.next.prev = node1;
        } else {
            this.tail = node1;
        }

        node2.prev = tempPrev;
        node2.next = tempNext;
        if (node2.prev) {
            node2.prev.next = node2;
        } else {
            this.head = node2;
        }
        if (node2.next) {
            node2.next.prev = node2;
        } else {
            this.tail = node2;
        }
    }

    nodeAt(index) {
        let currentNode = this.head;
        for (let i = 0; currentNode !== null && i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    changePrev(node, newPrev) {
        if (node === this.head) {
            this.head.prev = newPrev;
        } else {
            node.prev = newPrev;
        }
    }
}

const ll = new LinkedList();
console.log(ll);

ll.addLast("A");
ll.addLast("B");
ll.addLast("E")

console.log("Initial List:")
ll.dumpList();

const nodeToChangePrev = ll.head.next;
const newPrev = {
    prev: null,
    next: null,
    data: "Z"
};

ll.removeLast();
ll.removeFirst();
const nodeToRemove = ll.nodeAt(0);
ll.removeNode(nodeToRemove);

const nodeToInsertBefore = ll.nodeAt(0);
ll.insertBeforeNode(nodeToInsertBefore, "X");
const nodeToInsertAfter = ll.nodeAt(1);
ll.insertAfterNode(nodeToInsertAfter, "Y");

for (let i = 0; i < 5; i++) {
    console.log(`Node at index ${i}: ${ll.nodeAt(i)?.data}`);
}

ll.changePrev(nodeToChangePrev, newPrev);
console.log("After changing prev:");
ll.dumpList();

const node2 = {
    prev: null,
    next: null,
    data: "B"
}

const node3 = {
    prev: null,
    next: null,
    data: "E"
}

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;