const BinarySearchTree = require('./BinarySearchTree');

/*
1
            3
          /   \   
        1       4       
         \       \
          2       6
                /   \
                5    9
                 \
                  7

                E
              /   \
             A     S         
                  /  \
                 Q    Y
                /     /    
               E      U
              /     /
             I     S
              \     \
               O     T
              /
             N
*/

/*
2

*/

/*
4

  This program keeps a running total of all values located in the tree
    let BST = new BinarySearchTree();
    BST.insert(3,3)
    BST.insert(1,1)
    BST.insert(4,4)
    BST.insert(6,6)
    BST.insert(9,9)
    BST.insert(2,2)
    BST.insert(5,5)
    BST.insert(7,7)
    console.log(tree(BST))      //37

    Runtime of this algorithm is n^2
*/

function main(){

  let BST = new BinarySearchTree();

  
  // BST.insert(3)
  // BST.insert(1)
  // BST.insert(4)
  // BST.insert(6)
  // BST.insert(9)
  // BST.insert(2)
  // BST.insert(5)
  // BST.insert(7)
  
  
  // BST.insert('E')
  // BST.insert('A')
  // BST.insert('S')
  // BST.insert('Y')
  // BST.insert('Q')
  // BST.insert('U')
  // BST.insert('E')
  // BST.insert('S')
  // BST.insert('T')
  // BST.insert('I')
  // BST.insert('O')
  // BST.insert('N')
  
  console.log(BST.findParent('I'))
  console.log(BST.findChildren('T'))
  //console.log(BST)
  return BST

}


let BST = new BinarySearchTree();
let NST = new BinarySearchTree();
BST.insert(3,3)
BST.insert(1,1)
BST.insert(4,4)
BST.insert(6,6)
BST.insert(9,9)
BST.insert(0,0)
BST.insert(2,2)
BST.insert(5,5)
BST.insert(7,7)
BST.insert(8,8)

NST.insert(0,0)
NST.insert(1,1)
//BST.insert(7,7)
//console.log(tree(BST))
//console.log(heightOfBST(BST))
//console.log(isItBST(BST))
//console.log(isItBST(NST))
//console.log(nthLargestNode(BST))
//console.log(BST.findChildren(9))
//console.log(isItBalanced(BST))
console.log(areTheyTheSame([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]))


function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

function heightOfBST(tree){

  let max = 0
  let max1 = 0

  if(!tree){
    return 0;
  }

  max = heightOfBST(tree.left) +1 
  max1 =  heightOfBST(tree.right) + 1

  if(max > max1){
    return max
  } else {
    return max1
  }
}

function isItBST(tree, isBST = false){

  if(!tree){
    return isBST
  }

  if(tree.parent){
    if(this.key > tree.parent.key){
      isBST = false
    }
    if(tree.left){
      if(this.key < tree.left.key){
        isBST = false
      }
    }
    if(tree.right){
      if(this.key > tree.right.key){
        isBST = false
      }
    } else {
      isBST = true
    }


  }

  isItBST(tree.left, isBST)

  return isItBST(tree.right, isBST)

}

function nthLargestNode(tree, valArray = [], nth = 4, nthLargest =0){

  if(!tree){
    if(valArray.length >= nth){
      console.log(valArray)
      nthLargest = valArray[valArray.length-nth]
    }
    return nthLargest
  }

  valArray.push(tree.key)
  valArray.sort()

  nthLargestNode(tree.left, valArray, nth, nthLargest)

  return nthLargestNode(tree.right, valArray, nth, nthLargest)

}

function isItBalanced(tree, isBalanced = false, moves = 0, edgeArray = []){

  if(!tree){
    return 0
  }

  if(!tree.right && !tree.left){
    function findMoves(tree, moves){
      if(tree.parent===null){
        edgeArray.push(moves)
        edgeArray.sort()
        if((edgeArray[edgeArray.length-1] - edgeArray[0]) > 1){
          isBalanced = false
        } else {
          isBalanced = true
        }
        return moves
      }
      moves = moves + 1
      return findMoves(tree.parent, moves)
    }
    findMoves(tree, moves)
    console.log(`Im a leaf node : ${tree.key} in ${findMoves(tree, moves)} edges from root. Tree Balanced = ${isBalanced}`)

  }

return isItBalanced(tree.right, isBalanced, moves, edgeArray) + isItBalanced(tree.left, isBalanced, moves, edgeArray)
}

function areTheyTheSame(arr1, arr2){

  arr1left = []
  arr2left = []
  arr1right = []
  arr2right = []
  if(arr1.length===arr2.length){
    if(arr1[0] === arr2[0]){
      for(let i = 1; i < arr1.length; i++){
        if(arr1[i] < arr1[0]){
          arr1left.push(arr1[i])
        }
        if(arr1[i] > arr1[0]){
          arr1right.push(arr1[i])
        }
        if(arr2[i] < arr2[0]){
          arr2left.push(arr2[i])
        }
        if(arr2[i] > arr2[0]){
          arr2right.push(arr2[i])
        }
      }
    }
  }
  console.log(arr1left)
  console.log(arr2left)
  console.log(arr1right)
  console.log(arr2right)
}

//main();