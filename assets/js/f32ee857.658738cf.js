"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[977],{57160:e=>{e.exports=JSON.parse('{"functions":[{"name":"slice","desc":"Slices an array.\\n\\n```lua\\nlocal array = { 1, 2, 3, 4, 5 }\\n\\nlocal new = Slice(array, 2, 3) -- { 2, 3 }\\nlocal new = Slice(array, -2, -1) -- { 3, 4 }\\nlocal new = Slice(array, 3) -- { 3, 4, 5 }\\n```","params":[{"name":"array","desc":"The array to slice.","lua_type":"{T}"},{"name":"from?","desc":"The index to start from (can be negative).","lua_type":"number"},{"name":"to?","desc":"The index to end at (can be negative).","lua_type":"number"}],"returns":[{"desc":"The sliced array.","lua_type":"{T}"}],"function_type":"static","source":{"line":21,"path":"src/Array/slice.lua"}},{"name":"update","desc":"Updates an array at the given index. If the value at the given index does\\nnot exist, `callback` will be called, and its return value will be used\\nas the value at the given index.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Update(array, 2, function(value)\\n\\treturn value + 1\\nend) -- { 2, 3, 3 }\\n\\nlocal new = Update(array, 4, function(value)\\n\\treturn value + 1\\nend, function(value)\\n\\treturn 10\\nend) -- { 1, 2, 3, 10 }\\n```","params":[{"name":"array","desc":"The array to update.","lua_type":"{T}"},{"name":"index","desc":"The index to update.","lua_type":"number"},{"name":"updater?","desc":"The updater function.","lua_type":"(value: T, index: number) -> T"},{"name":"callback?","desc":"The callback function.","lua_type":"(index: number) -> T"}],"returns":[{"desc":"The updated array.","lua_type":"{T}"}],"function_type":"static","source":{"line":44,"path":"src/Array/update.lua"}},{"name":"copy","desc":"Copies an array.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Copy(array) -- { 1, 2, 3 }\\n\\nprint(new == array) -- false\\n```","params":[{"name":"array","desc":"The array to copy.","lua_type":"{T}"}],"returns":[{"desc":"The copied array.","lua_type":"{T}"}],"function_type":"static","source":{"line":19,"path":"src/Array/copy.lua"}},{"name":"reduceRight","desc":"Reduces the array using the given reducer and initial accumulator value,\\nstarting from the end of the array. If no `initialReduction` value is given,\\nthe last item in the array is used.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = ReduceRight(array, function(accumulator, item, index)\\n\\treturn accumulator - item\\nend) -- 0\\n\\nlocal value = ReduceRight(array, function(accumulator, item, index)\\n\\ttable.insert(accumulator, item)\\n\\treturn accumulator\\nend, {}) -- { 3, 2, 1 }\\n```","params":[{"name":"array","desc":"The array to reduce.","lua_type":"{T}"},{"name":"reducer","desc":"The reducer to use.","lua_type":"(accumulator: U, value: T, index: number, array: {T}) -> U"},{"name":"initialReduction?","desc":"The initial accumulator value.","lua_type":"U = {T}[#{T}]"}],"returns":[{"desc":"The final accumulator value.","lua_type":"U"}],"function_type":"static","source":{"line":28,"path":"src/Array/reduceRight.lua"}},{"name":"shift","desc":"Removes the first item from an array and returns the array\\nwith the item removed.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Shift(array) -- { 2, 3 }\\nlocal new = Shift(array, 2) -- { 3 }\\n```","params":[{"name":"array","desc":"The array to shift.","lua_type":"{T}"},{"name":"count?","desc":"The number of items to shift.","lua_type":"number"}],"returns":[{"desc":"The shifted array.","lua_type":"{T}"}],"function_type":"static","source":{"line":20,"path":"src/Array/shift.lua"}},{"name":"find","desc":"Finds the index of the first item in the array that matches the value. This is\\nmostly a wrapper around `table.find`, with the ability to specify a negative\\nnumber as the start index (to search relative to the end of the array).\\n\\n#### Aliases\\n`indexOf`\\n\\n```lua\\nlocal array = { \\"hello\\", \\"world\\", \\"hello\\" }\\n\\nlocal index = Find(array, \\"hello\\") -- 1\\nlocal index = Find(array, \\"hello\\", 2) -- 3\\n```","params":[{"name":"array","desc":"The array to search.","lua_type":"{T}"},{"name":"value?","desc":"The value to search for.","lua_type":"any"},{"name":"from?","desc":"The index to start searching from.","lua_type":"number"}],"returns":[{"desc":"The index of the first item in the array that matches the value.","lua_type":"number?"}],"function_type":"static","source":{"line":25,"path":"src/Array/find.lua"}},{"name":"splice","desc":"Splices an array.\\n\\n```lua\\nlocal array = { 1, 2, 3, 4, 5 }\\n\\nlocal new = Splice(array, 3, 4, 6, 7) -- { 1, 2, 6, 7, 4, 5 }\\nlocal new = Splice(array, -1, 0, 6, 7) -- { 1, 2, 3, 4, 6, 7 }\\nlocal new = Splice(array, 4, -1, 6, 7) -- { 1, 2, 3, 6, 7, 5 }\\n```","params":[{"name":"array","desc":"The array to splice.","lua_type":"{T}"},{"name":"start?","desc":"The index to start splicing at (can be negative).","lua_type":"number"},{"name":"end?","desc":"The index to end splicing at (can be negative).","lua_type":"number"},{"name":"...","desc":"The values to insert.","lua_type":"...T"}],"returns":[{"desc":"The spliced array.","lua_type":"{T}"}],"function_type":"static","source":{"line":22,"path":"src/Array/splice.lua"}},{"name":"equals","desc":"Compares two arrays for equality.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\nlocal other = { 1, 2, 3 }\\n\\nlocal value = Equals(array, other) -- true\\nlocal value = Equals(array, other, { 1, 2, 3 }) -- true\\nlocal value = Equals(array, other, { 1, 2, 4 }) -- false\\n```","params":[{"name":"...","desc":"The arrays to compare.","lua_type":"...{any}"}],"returns":[{"desc":"Whether the arrays are equal.","lua_type":"boolean"}],"function_type":"static","source":{"line":44,"path":"src/Array/equals.lua"}},{"name":"count","desc":"Counts the number of items in an array.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = Count(array) -- 3\\nlocal value = Count(array, function(item, index)\\n\\treturn item == 2\\nend) -- 1\\n```","params":[{"name":"array","desc":"The array to count the number of items in.","lua_type":"{T}"},{"name":"predicate?","desc":"The predicate to use to filter the array.","lua_type":"(value: T, index: number, array: {T}) -> any"}],"returns":[{"desc":"The number of items in the array.","lua_type":"number"}],"function_type":"static","source":{"line":25,"path":"src/Array/count.lua"}},{"name":"shuffle","desc":"Randomises the order of the items in an array.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Shuffle(array) -- { 2, 3, 1 }\\n```","params":[{"name":"array","desc":"The array to shuffle.","lua_type":"{T}"}],"returns":[{"desc":"The shuffled array.","lua_type":"{T}"}],"function_type":"static","source":{"line":19,"path":"src/Array/shuffle.lua"}},{"name":"create","desc":"Creates an array of the given length, filled with the given value.\\nThis is just a wrapper around `table.create`.\\n\\n```lua\\nlocal array = Create(3, \\"Hello\\")\\n\\nprint(array) -- { \\"Hello\\", \\"Hello\\", \\"Hello\\" }\\n```","params":[{"name":"length","desc":"The length of the array to create.","lua_type":"number"},{"name":"value?","desc":"The value to fill the array with.","lua_type":"T"}],"returns":[{"desc":"The created array.","lua_type":"{T}"}],"function_type":"static","source":{"line":19,"path":"src/Array/create.lua"}},{"name":"last","desc":"Gets the last element of the array.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = Last(array) -- 3\\n```","params":[{"name":"array","desc":"The array to get the last element of.","lua_type":"{T}"}],"returns":[{"desc":"The last element of the array.","lua_type":"T"}],"function_type":"static","source":{"line":19,"path":"src/Array/last.lua"}},{"name":"every","desc":"Checks whether every item in the array passes the predicate.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = Every(array, function(item, index)\\n\\treturn item > 0\\nend) -- true\\n\\nlocal value = Every(array, function(item, index)\\n\\treturn item > 1\\nend) -- false\\n```","params":[{"name":"array","desc":"The array to check.","lua_type":"{T}"},{"name":"predicate","desc":"The predicate to use to check the array.","lua_type":"(value: T, index: number, array: {T}) -> any"}],"returns":[{"desc":"Whether every item in the array passes the predicate.","lua_type":"boolean"}],"function_type":"static","source":{"line":24,"path":"src/Array/every.lua"}},{"name":"reverse","desc":"Reverses the order of the items in an array.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Reverse(array) -- { 3, 2, 1 }\\n```","params":[{"name":"array","desc":"The array to reverse.","lua_type":"{T}"}],"returns":[{"desc":"The reversed array.","lua_type":"{T}"}],"function_type":"static","source":{"line":17,"path":"src/Array/reverse.lua"}},{"name":"set","desc":"Sets a value on an array at the given index.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Set(array, 2, 4) -- { 1, 4, 3 }\\nlocal new = Set(array, -1, 4) -- { 1, 2, 4 }\\n```","params":[{"name":"array","desc":"The array to set the value on.","lua_type":"{T}"},{"name":"index","desc":"The index to set the value at (can be negative).","lua_type":"number"},{"name":"value","desc":"The value to set.","lua_type":"T"}],"returns":[{"desc":"The array with the value set.","lua_type":"{T}"}],"function_type":"static","source":{"line":20,"path":"src/Array/set.lua"}},{"name":"filter","desc":"Filters an array using a filterer callback. Any items that do not pass the filterer will be removed from the array.\\n\\nIf no filterer is provided, all items will be kept.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal result = Filter(array, function(item, index)\\n\\treturn item > 1\\nend) -- { 2, 3 }\\n```","params":[{"name":"array","desc":"The array to filter.","lua_type":"{T}"},{"name":"filterer?","desc":"The callback to use to filter the array.","lua_type":"(value: T, index: number, array: {T}) -> any"}],"returns":[{"desc":"The filtered array.","lua_type":"{T}"}],"function_type":"static","source":{"line":26,"path":"src/Array/filter.lua"}},{"name":"push","desc":"Adds elements to the end of the array.\\n\\n#### Aliases\\n\\n`append`\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Push(array, 4, 5, 6) -- { 1, 2, 3, 4, 5, 6 }\\n```","params":[{"name":"array","desc":"The array to push an element to.","lua_type":"{T}"},{"name":"...","desc":"The elements to push.","lua_type":"...T"}],"returns":[{"desc":"The array with the pushed elements.","lua_type":"{T}"}],"function_type":"static","source":{"line":22,"path":"src/Array/push.lua"}},{"name":"includes","desc":"Checks whether the array contains the value. This is a wrapper\\naround `Find`.\\n\\n#### Aliases\\n\\n`contains`, `has`\\n\\n```lua\\nlocal array = { \\"hello\\", \\"world\\", \\"goodbye\\" }\\n\\nlocal value = Includes(array, \\"hello\\") -- true\\nlocal value = Includes(array, \\"sift\\") -- false\\nlocal value = Includes(array, \\"hello\\", 2) -- false\\n```","params":[{"name":"array","desc":"The array to search.","lua_type":"{T}"},{"name":"value","desc":"The value to search for.","lua_type":"any"},{"name":"from?","desc":"The index to start searching from.","lua_type":"number"}],"returns":[{"desc":"Whether the array contains the value.","lua_type":"boolean"}],"function_type":"static","source":{"line":28,"path":"src/Array/includes.lua"}},{"name":"equalsDeep","desc":"Compares two arrays for equality using deep comparison.\\n\\n```lua\\nlocal array = { 1, 2, 3, { 4, 5 } }\\nlocal other = { 1, 2, 3, { 4, 5 } }\\n\\nlocal value = EqualsDeep(array, other) -- true\\nlocal value = EqualsDeep(array, other, { 1, 2, 3, { 4, 5 } }) -- true\\nlocal value = EqualsDeep(array, other, { 1, 2, 3, { 4, 6 } }) -- false\\n```","params":[{"name":"...","desc":"The arrays to compare.","lua_type":"...{any}"}],"returns":[{"desc":"Whether the arrays are equal.","lua_type":"boolean"}],"function_type":"static","source":{"line":44,"path":"src/Array/equalsDeep.lua"}},{"name":"map","desc":"Maps the array using the mapper function.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Map(array, function(value, index)\\n\\treturn value * 2\\nend) -- { 2, 4, 6 }\\n```","params":[{"name":"array","desc":"The array to map.","lua_type":"{T}"},{"name":"mapper","desc":"The mapper function.","lua_type":"(value: T, index: number, array: {T}) -> U?"}],"returns":[{"desc":"The mapped array.","lua_type":"{U}"}],"function_type":"static","source":{"line":20,"path":"src/Array/map.lua"}},{"name":"findWhere","desc":"Finds the index of the first item in the array that passes the predicate.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal index = FindWhere(array, function(item, index)\\n\\treturn item > 1\\nend) -- 2\\n```","params":[{"name":"array","desc":"The array to search.","lua_type":"{T}"},{"name":"predicate","desc":"The predicate to use to check the array.","lua_type":"(value: T, index: number, array: {T}) -> any"},{"name":"from?","desc":"The index to start searching from.","lua_type":"number"}],"returns":[{"desc":"The index of the first item in the array that matches the predicate.","lua_type":"number"}],"function_type":"static","source":{"line":21,"path":"src/Array/findWhere.lua"}},{"name":"pop","desc":"Removes an element from the end of the array, and returns\\nthe array with the popped elements removed.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Pop(array) -- { 1, 2 }\\nlocal new = Pop(array, 2) -- { 1 }\\n```","params":[{"name":"array","desc":"The array to pop an element from.","lua_type":"{T}"},{"name":"count?","desc":"The number of elements to pop.","lua_type":"number = 1"}],"returns":[{"desc":"An array with the popped elements removed.","lua_type":"{T}"}],"function_type":"static","source":{"line":20,"path":"src/Array/pop.lua"}},{"name":"zip","desc":"Zips multiple arrays together into a single array.\\n\\n```lua\\nlocal table1 = { 1, 2, 3 }\\nlocal table2 = { \\"hello\\", \\"world\\", \\"goodbye\\" }\\n\\nlocal new = Zip(table1, table2) -- { { 1, \\"hello\\" }, { 2, \\"world\\" }, { 3, \\"goodbye\\" } }\\n```","params":[{"name":"...","desc":"The arrays to zip together.","lua_type":"{any}"}],"returns":[{"desc":"The zipped array.","lua_type":"{any}"}],"function_type":"static","source":{"line":20,"path":"src/Array/zip.lua"}},{"name":"copyDeep","desc":"Copies an array, with deep copies of all nested arrays.\\n\\n```lua\\nlocal array = { 1, 2, 3, { 4, 5 } }\\n\\nlocal result = CopyDeep(array) -- { 1, 2, 3, { 4, 5 } }\\n\\nprint(result == array) -- false\\nprint(result[4] == array[4]) -- false\\n```","params":[{"name":"array","desc":"The array to copy.","lua_type":"{T}"}],"returns":[{"desc":"The copied array.","lua_type":"{T}"}],"function_type":"static","source":{"line":20,"path":"src/Array/copyDeep.lua"}},{"name":"freeze","desc":"Freezes the top level of the array, making it read-only.\\n\\n```lua\\nlocal array = { 1, 2, 3, { 4, 5, 6 } }\\n\\nlocal new = Freeze(array)\\n\\nnew[1] = 4 -- error!\\nnew[4][1] = 7 -- still works!\\n```","params":[{"name":"array","desc":"The array to freeze.","lua_type":"{T}"}],"returns":[{"desc":"The frozen array.","lua_type":"{T}"}],"function_type":"static","source":{"line":22,"path":"src/Array/freeze.lua"}},{"name":"flatten","desc":"Flattens an array. If depth is not specified, it will flatten\\nthe array as far as it can go.\\n\\n```lua\\nlocal array = {\\n\\t{ 1, 2, 3 },\\n\\t{ 4, 5, 6 },\\n\\t{ 7, { 8, 9 } },\\n}\\n\\nlocal new = Flatten(array) -- { 1, 2, 3, 4, 5, 6, 7, 8, 9 }\\nlocal new = Flatten(array, 1) -- { 1, 2, 3, 4, 5, 6, 7, { 8, 9 } }\\n```","params":[{"name":"array","desc":"The array to flatten.","lua_type":"{T}"},{"name":"depth?","desc":"The depth to flatten the array to.","lua_type":"number"}],"returns":[{"desc":"The flattened array.","lua_type":"{T}"}],"function_type":"static","source":{"line":24,"path":"src/Array/flatten.lua"}},{"name":"removeIndex","desc":"Removes a value from an array at the given index.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = RemoveIndex(array, 1) -- { 2, 3 }\\nlocal new = RemoveIndex(array, -1) -- { 1, 3 }\\n```","params":[{"name":"array","desc":"The array to remove the value from.","lua_type":"{T}"},{"name":"index","desc":"The index to remove the value from (can be negative).","lua_type":"number"}],"returns":[{"desc":"The array with the value removed.","lua_type":"{T}"}],"function_type":"static","source":{"line":19,"path":"src/Array/removeIndex.lua"}},{"name":"reduce","desc":"Reduces the array using the given reducer and initial accumulator value.\\nIf no `initialReduction` value is given, the first item in the array is used.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = Reduce(array, function(accumulator, item, index)\\n\\treturn accumulator - item\\nend) -- -4\\n\\nlocal value = Reduce(array, function(accumulator, item, index)\\n\\ttable.insert(accumulator, item)\\n\\treturn accumulator\\nend, {}) -- { 1, 2, 3 }\\n```","params":[{"name":"array","desc":"The array to reduce.","lua_type":"{T}"},{"name":"reducer","desc":"The reducer to use.","lua_type":"(accumulator: U, value: T, index: number, array: {T}) -> U"},{"name":"initialReduction?","desc":"The initial accumulator value.","lua_type":"U = {T}[1]"}],"returns":[{"desc":"The final accumulator value.","lua_type":"U"}],"function_type":"static","source":{"line":27,"path":"src/Array/reduce.lua"}},{"name":"first","desc":"Gets the first item in the array.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = First(array) -- 1\\n```","params":[{"name":"array","desc":"The array to get the first item from.","lua_type":"{T}"}],"returns":[{"desc":"The first item in the array.","lua_type":"T"}],"function_type":"static","source":{"line":19,"path":"src/Array/first.lua"}},{"name":"insert","desc":"Inserts the given values into an array at the given index, shifting all values after it to the right. If the index is negative (or 0), it is counted from the end of the array.\\n\\nIf the index to insert at is out of range, the array is not modified.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal newArray = Insert(array, 2, 4) -- { 1, 4, 2, 3 }\\n```","params":[{"name":"array","desc":"The array to insert the value into.","lua_type":"{T}"},{"name":"index","desc":"The index to insert the value at (can be negative).","lua_type":"number"},{"name":"values","desc":"The values to insert.","lua_type":"...T"}],"returns":[{"desc":"The array with the value inserted.","lua_type":"{T}"}],"function_type":"static","source":{"line":21,"path":"src/Array/insert.lua"}},{"name":"concatDeep","desc":"Joins multiple arrays together into a single array, with deep copies of all\\nnested arrays.\\n\\n#### Aliases\\n\\n`joinDeep`, `mergeDeep`\\n\\n```lua\\nlocal table1 = { 1, 2, { 3, 4 } }\\nlocal table2 = { 5, 6, { 7, 8 } }\\n\\nlocal new = ConcatDeep(table1, table2) -- { 1, 2, { 3, 4 }, 5, 6, { 7, 8 } }\\n```","params":[{"name":"...","desc":"The arrays to concatenate.","lua_type":"...any"}],"returns":[{"desc":"The concatenated array.","lua_type":"{T}"}],"function_type":"static","source":{"line":28,"path":"src/Array/concatDeep.lua"}},{"name":"removeValue","desc":"Removes a value from an array.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = RemoveValue(array, 2) -- { 1, 3 }\\n```","params":[{"name":"array","desc":"The array to remove the value from.","lua_type":"{T}"},{"name":"value","desc":"The value to remove.","lua_type":"T"}],"returns":[{"desc":"The array with the value removed.","lua_type":"{T}"}],"function_type":"static","source":{"line":18,"path":"src/Array/removeValue.lua"}},{"name":"at","desc":"Gets a value from an array at the given index.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = At(array, 1) -- 1\\nlocal value = At(array, 0) -- 3\\n```","params":[{"name":"array","desc":"The array to get the value from.","lua_type":"{T}"},{"name":"index","desc":"The index to get the value from (can be negative).","lua_type":"number"}],"returns":[{"desc":"The value at the given index.","lua_type":"T"}],"function_type":"static","source":{"line":19,"path":"src/Array/at.lua"}},{"name":"some","desc":"Checks whether some item in the array passes the predicate.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal value = Some(array, function(item, index)\\n\\treturn item > 1\\nend) -- true\\n\\nlocal value = Some(array, function(item, index)\\n\\treturn item > 3\\nend) -- false\\n```","params":[{"name":"array","desc":"The array to check.","lua_type":"{T}"},{"name":"predicate","desc":"The predicate to use to check the array.","lua_type":"(value: T, index: number, array: {T}) -> any"}],"returns":[{"desc":"Whether some item in the array passes the predicate.","lua_type":"boolean"}],"function_type":"static","source":{"line":24,"path":"src/Array/some.lua"}},{"name":"freezeDeep","desc":"Freezes the entire array, making it read-only, including all\\nnested arrays.\\n\\n```lua\\nlocal array = { 1, 2, 3, { 4, 5, 6 } }\\n\\nlocal new = FreezeDeep(array)\\n\\nnew[1] = 4 -- error!\\nnew[4][1] = 7 -- error!\\n```","params":[{"name":"array","desc":"The array to freeze.","lua_type":"{T}"}],"returns":[{"desc":"The frozen array.","lua_type":"{T}"}],"function_type":"static","source":{"line":21,"path":"src/Array/freezeDeep.lua"}},{"name":"findWhereLast","desc":"Finds the index of the last item in the array that passes the predicate.\\n\\n```lua\\nlocal array = { \\"hello\\", \\"world\\", \\"hello\\" }\\n\\nlocal index = FindWhereLast(array, function(item, index)\\n\\treturn item == \\"hello\\"\\nend) -- 3\\n\\nlocal index = FindWhereLast(array, function(item, index)\\n\\treturn item == \\"hello\\"\\nend, 2) -- 1\\n```","params":[{"name":"array","desc":"The array to search.","lua_type":"{T}"},{"name":"predicate","desc":"The predicate to use to check the array.","lua_type":"(value: T, index: number, array: {T}) -> any"},{"name":"from?","desc":"The index to start searching from.","lua_type":"number"}],"returns":[{"desc":"The index of the last item in the array that matches the predicate.","lua_type":"number"}],"function_type":"static","source":{"line":25,"path":"src/Array/findWhereLast.lua"}},{"name":"removeValues","desc":"Removes values from an array.\\n\\n```lua\\nlocal array = { \\"a\\", \\"b\\", \\"c\\", \\"c\\", \\"d\\", \\"e\\" }\\n\\nlocal new = RemoveValues(array, \\"c\\", \\"d\\") -- { \\"a\\", \\"b\\", \\"e\\" }\\n```","params":[{"name":"array","desc":"The array to remove values from.","lua_type":"{T}"},{"name":"...","desc":"The values to remove.","lua_type":"T"}],"returns":[{"desc":"The array with the values removed.","lua_type":"{T}"}],"function_type":"static","source":{"line":20,"path":"src/Array/removeValues.lua"}},{"name":"sort","desc":"Sorts an array.\\n\\n```lua\\nlocal array = { \\"a\\", \\"b\\", \\"c\\", \\"d\\", \\"e\\" }\\n\\nlocal new = Sort(array, function(a, b)\\n\\treturn a > b\\nend) -- { \\"e\\", \\"d\\", \\"c\\", \\"b\\", \\"a\\" }\\n```","params":[{"name":"array","desc":"The array to sort.","lua_type":"{T}"},{"name":"comparator?","desc":"The comparator function.","lua_type":"(a: T, b: T) -> boolean"}],"returns":[{"desc":"The sorted array.","lua_type":"{T}"}],"function_type":"static","source":{"line":22,"path":"src/Array/sort.lua"}},{"name":"zipAll","desc":"Zips multiple arrays together into a single array, filling\\nin missing values with `None`.\\n\\n```lua\\nlocal table1 = { 1, 2, 3, 4 }\\nlocal table2 = { \\"hello\\", \\"world\\", \\"goodbye\\" }\\n\\nlocal new = ZipAll(table1, table2) -- { { 1, \\"hello\\" }, { 2, \\"world\\" }, { 3, \\"goodbye\\" }, { 4, None } }\\n```","params":[{"name":"...","desc":"The arrays to zip.","lua_type":"...{any}"}],"returns":[{"desc":"The zipped array.","lua_type":"{any}"}],"function_type":"static","source":{"line":24,"path":"src/Array/zipAll.lua"}},{"name":"findLast","desc":"Finds the index of the last item in the array that matches the value.\\n\\n```lua\\nlocal array = { \\"hello\\", \\"world\\", \\"hello\\" }\\n\\nlocal index = FindLast(array, \\"hello\\") -- 3\\nlocal index = FindLast(array, \\"hello\\", 2) -- 1\\n```","params":[{"name":"array","desc":"The array to search.","lua_type":"{T}"},{"name":"value?","desc":"The value to search for.","lua_type":"any"},{"name":"from?","desc":"The index to start searching from.","lua_type":"number"}],"returns":[{"desc":"The index of the last item in the array that matches the value.","lua_type":"number?"}],"function_type":"static","source":{"line":20,"path":"src/Array/findLast.lua"}},{"name":"removeIndices","desc":"Removes values from an array at the given indices.\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = RemoveIndices(array, 1, 2) -- { 3 }\\nlocal new = RemoveIndices(array, 0, -1) -- { 1 }\\n```","params":[{"name":"array","desc":"The array to remove the indices from.","lua_type":"{T}"},{"name":"...","desc":"The indices to remove the values from (can be negative).","lua_type":"...number"}],"returns":[{"desc":"The array with the values removed.","lua_type":"{T}"}],"function_type":"static","source":{"line":19,"path":"src/Array/removeIndices.lua"}},{"name":"concat","desc":"Joins multiple arrays together into a single array.\\n\\n#### Aliases\\n\\n`join`, `merge`\\n\\n```lua\\nlocal table1 = { 1, 2, 3 }\\nlocal table2 = { 4, 5, 6 }\\n\\nlocal new = Concat(table1, table2) -- { 1, 2, 3, 4, 5, 6 }\\n```","params":[{"name":"...","desc":"The arrays to concatenate.","lua_type":"...any"}],"returns":[{"desc":"The concatenated array.","lua_type":"{T}"}],"function_type":"static","source":{"line":26,"path":"src/Array/concat.lua"}},{"name":"toSet","desc":"Converts an array to a set.\\n\\n```lua\\nlocal array = { \\"a\\", \\"b\\", \\"b\\", \\"c\\", \\"d\\" }\\n\\nlocal set = ToSet(array) -- { a = true, b = true, c = true, d = true }\\n```","params":[{"name":"array","desc":"The array to convert to a set.","lua_type":"{T}"}],"returns":[{"desc":"The set.","lua_type":"Set<T>"}],"function_type":"static","source":{"line":20,"path":"src/Array/toSet.lua"}},{"name":"unshift","desc":"Inserts values to the beginning of an array.\\n\\n#### Aliases\\n\\n`prepend`\\n\\n```lua\\nlocal array = { 1, 2, 3 }\\n\\nlocal new = Unshift(array, 4, 5) -- { 4, 5, 1, 2, 3 }\\n```","params":[{"name":"array","desc":"The array to insert the values to.","lua_type":"{T}"},{"name":"...","desc":"The values to insert.","lua_type":"...T"}],"returns":[{"desc":"The array with the values inserted.","lua_type":"{T}"}],"function_type":"static","source":{"line":22,"path":"src/Array/unshift.lua"}}],"properties":[],"types":[],"name":"Array","desc":"An array is a table consisting of index-value pairs. You don\'t need to\\nmanually specify the indices when you create an array.\\n\\n```lua\\nlocal array = {\\n\\t\\"hello\\",\\n\\t\\"world\\",\\n}\\n```\\n\\n<br><br>\\n\\n#### Aliases\\n\\n`List`","source":{"line":21,"path":"src/Array/init.lua"}}')}}]);