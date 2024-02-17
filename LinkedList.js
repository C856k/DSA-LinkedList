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

ll.dumpList();

const nodeToChangePrev = ll.head.next;
const newPrev = {
    prev: null,
    next: null,
    data: "Z"
};
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