const challengeAnswers = {
    1: {
        name: 'Introduction',
        boilerPlate: '',
        answer: '',
        description: <div>
            <p className=" pb-3">Welcome to our "Two Sum" LeetCode course! This step-by-step guide is here to help you master the art of solving the Two Sum problem efficiently. </p>
            <p className=" pb-3">This is the introduction to the tutorial.</p>
            <p className=" pb-3">You will learn the fundamentals of solving TwoSum</p>
            <p className=" pb-3">Starting with loops, then the Enumerate method before learning hashMaps.</p>
            <p className=" pb-7">Each task will explain the concept and give an example. Then you will be required to write some code using the concept you just learned.</p>
            <p className=" pb-3">GoodLuck and have fun!</p>
            <p className=" pb-3">To continue click the "Run the Code!" button.</p>
        </div>
    },
    2: {
        name: 'Loops in Python',
        boilerPlate: 'newArray = [5, 5, 6, 7] \n#Write your code below this line \n',
        answer: 'for',
        description: <div>
        <p>With loops, you can execute a sequence of instructions over and over again for a set pre-determined number of times until a specific condition is met.</p>
        <p className='py-3'>There are two types of loops in Python:</p>
        <p><code>for loops</code></p>
        <p><code>while loops</code></p>
        <p className='py-6'>To solve the LeetCode problem "TwoSum" you will need to use a for loop</p>
        <p>Here is a for loop in action</p>
        <p><code>Array = [2, 3, 4 ,5]</code></p>
        <p><code>for n in Array:</code></p>
        <p><code>   print(n)</code></p>
        <p>The following will be printed to the console:</p>
        <p><code>2</code></p>
        <p><code>3</code></p>
        <p><code>4</code></p>
        <p><code>5</code></p>
        <p className=' border-t border-b border-[#282c34] py-5'>Write a <code>for</code> loop for <code>newArray</code> that prints each element to the console</p></div>
    },
    3: {
        name: 'Enumerate()',
        boilerPlate: 'nums = [5, 80, 4, 43] \n#Write your code here\n' ,
        answer: 'enumerate',
        description: <div>
            <p>In Python, enumerate() is a built-in function that adds a counter to an iterable, such as a list, tuple, or string. It returns an enumerate object, which contains pairs of index and corresponding element from the iterable. This is particularly useful when you want to iterate over both the elements and their indices in a loop.</p>
            <p>Here's a simple example:</p>
            <div className="py-4">
            <p><code>fruits = ['apple', 'banana', 'orange']</code></p>
            <p><code>for index, fruit in enumerate(fruits):</code></p>
            <p><code>print(f"Index: {'{'}index{'}'}, Fruit: {'{'}fruit{'}'}")</code></p>
            </div>
            <div className="py-4">
            <p>Output:</p>
            <p><code>Index: 0, Fruit: apple</code></p>
            <p><code>Index: 1, Fruit: banana</code></p>
            <p><code>Index: 2, Fruit: orange</code></p>
            </div>
            <p className=" pb-3">In this example, enumerate() allows us to iterate over the fruits list while simultaneously obtaining both the index and the corresponding fruit. The enumerate() function is often used in situations where you need to keep track of the position of elements in an iterable during iteration.</p>
            <div className="border-t border-b border-[#282c34] py-5">
            <p>Loop through the array <code>nums</code> but remember to use the enumerate function to retrieve the index and value from the array like in the example above. Then print the index, value to the console to see the result</p>    
            </div>
        </div>
    },
    4: {
        name: 'hashmap',
        boilerPlate: 'nums = [5, 80, 4, 43] \n#Initialize the hashmap here! \n\nfor i, n in enumerate(nums): \n#add the i and n to the hashmap here! \n\nprint(hashmap)' ,
        answer: '{}',
        description: <div>
            <p>A hashmap is a table containing a key and its value.</p>
            <p>In the previous challenge we used the enumerate() method to print the array values and their correspoding keys.</p>
            <p>But what if we dont want to print them and want to store them somewhere?</p>
            <p>Thats where we can use a python dictionairy:</p>
            <p>A python dictionairy looks like this {'{'} England: London, Sweden: Stockholm {'}'} or {'{'} key: value {'}'}</p>
            <p>A python dictionary can be used as our hashmap</p>
            <p>In TwoSum, we dont want to add all of the arrays values to the hashmap in the beginning.</p>
            <p>we want to find the difference between the current iteration of the array and the target number, then only add the interation number to the hashmap if the difference isnt in the hashmap.</p>
            <p>If the difference is in the hashmap already, that means that there is a value in the hashmap that when added to the current iteration sums to the target.</p>
            <p>Thats a little complicated for now so first lets simplify it:</p>
            <div className="py-4">
            <p><code>array = [2, 5, 6, 19]</code></p>
            <p><code>hashmap = {'{}'}</code> initialize the hashmap as an empty dictionary</p>
            <p><code>for i, n in enumerate(array):</code></p>
            <p><code>if n {">"} 4:</code></p>
            <p><code>hashmap[i] = n</code></p>
            </div>
            <p className=" pb-3">First we have the array. Then we initialize the array as an empty dictionary. We enumerate the array to get the index and corresponding value. In this example we only add the values greater than 4. <code>hashmap[i] = n</code> sets i as the index and n as the value inside the dictionary. The hashmap now contains the index and value of the numbers greater than 4 <code>{"{"}1: 5, 2: 6, 3: 19{"}"}</code></p>
            <div className="border-t border-b border-[#282c34] py-5">
            <p>In the code editor we have an array called <code>nums</code> and a <code>for</code> loop to loop through the enumerated array to retrive the index and number. </p>
            <p>On line 3, initialize the hashmap as a dictionary then on line 5 add the index and numbers to the hashmap dictionary. Finally, click "Run the Code!" to print the contents of the hashmap to the console.</p>
            </div>
        </div>
    },
}

export default challengeAnswers;