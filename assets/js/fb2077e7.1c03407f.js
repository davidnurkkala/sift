"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[767],{61529:function(e){e.exports=JSON.parse('{"functions":[{"name":"keys","desc":"Gets the keys of the given dictionary as an array.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal keys = Keys(dictionary) -- { \\"hello\\", \\"goodbye\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to get the keys of.","lua_type":"{[K]: V}"}],"returns":[{"desc":"An array containing the keys of the given dictionary.","lua_type":"{K}"}],"function_type":"static","source":{"line":17,"path":"src/Dictionary/keys.lua"}},{"name":"copyDeep","desc":"Copies a dictionary recursively.\\n\\n```lua\\nlocal dictionary = { hello = { world = \\"goodbye\\" } }\\n\\nlocal new = CopyDeep(dictionary) -- { hello = { world = \\"goodbye\\" } }\\n\\nprint(new == dictionary) -- false\\nprint(new.hello == dictionary.hello) -- false\\n```","params":[{"name":"dictionary","desc":"The dictionary to copy.","lua_type":"T"}],"returns":[{"desc":"The copied dictionary.","lua_type":"T"}],"function_type":"static","source":{"line":20,"path":"src/Dictionary/copyDeep.lua"}},{"name":"removeValue","desc":"Removes the given value from the given dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal withoutHello = RemoveValue(dictionary, \\"roblox\\") -- { goodbye = \\"world\\" }\\nlocal withoutGoodbye = RemoveValue(dictionary, \\"world\\") -- { hello = \\"roblox\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to remove the value from.","lua_type":"{[K]: V}"},{"name":"value","desc":"The value to remove.","lua_type":"V"}],"returns":[{"desc":"The dictionary without the given value.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":19,"path":"src/Dictionary/removeValue.lua"}},{"name":"count","desc":"Counts the number of items in a dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", goodbye = \\"world\\" }\\n\\nlocal value = Count(dictionary) -- 2\\nlocal value = Count(dictionary, function(item, key)\\n  return item == \\"world\\"\\nend) -- 1\\n```","params":[{"name":"dictionary","desc":"The dictionary to count.","lua_type":"T"},{"name":"predicate?","desc":"The predicate to use to filter the dictionary.","lua_type":"(value: T, key: K, dictionary: T) -> any"}],"returns":[{"desc":"The number of items in the dictionary.","lua_type":"number"}],"function_type":"static","source":{"line":25,"path":"src/Dictionary/count.lua"}},{"name":"removeKeys","desc":"Removes the given keys from the given dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", cat = \\"meow\\", dog = \\"woof\\", unicorn = \\"rainbow\\" }\\n\\nlocal withoutCatDog = RemoveKeys(dictionary, \\"cat\\", \\"dog\\") -- { hello = \\"world\\", unicorn = \\"rainbow\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to remove the keys from.","lua_type":"{[K]: V}"},{"name":"keys","desc":"The keys to remove.","lua_type":"...K"}],"returns":[{"desc":"The dictionary without the given keys.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":20,"path":"src/Dictionary/removeKeys.lua"}},{"name":"includes","desc":"Checks whether or not the given dictionary includes the given value.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal includesRoblox = Includes(dictionary, \\"roblox\\") -- true\\nlocal includesCat = Includes(dictionary, \\"cat\\") -- false\\n```","params":[{"name":"dictionary","desc":"The dictionary to check.","lua_type":"{[K]: V}"},{"name":"value","desc":"The value to check for.","lua_type":"V"}],"returns":[{"desc":"Whether or not the dictionary includes the given value.","lua_type":"boolean"}],"function_type":"static","source":{"line":19,"path":"src/Dictionary/includes.lua"}},{"name":"equalsDeep","desc":"Compares two dictionaries for equality using deep comparison.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", goodbye = { world = \\"hello\\" } }\\nlocal other1 = { hello = \\"world\\", goodbye = { world = \\"hello\\" } }\\nlocal other2 = { hello = \\"hello\\", world = \\"goodbye\\" }\\n\\nlocal value = EqualsDeep(dictionary, other1) -- true\\nlocal value = EqualsDeep(dictionary, other1, other2) -- false\\n```","params":[{"name":"...","desc":"The dictionaries to compare.","lua_type":"...{ [any]: any }"}],"returns":[{"desc":"Whether the dictionaries are equal.","lua_type":"boolean"}],"function_type":"static","source":{"line":45,"path":"src/Dictionary/equalsDeep.lua"}},{"name":"mergeDeep","desc":"Merges the given dictionaries into a single dictionary. If the\\nvalue is `None`, it will be removed from the result. This is\\nrecursive. The parameters may be any number of dictionaries or\\n`nil`. Non-dictonaries will be ignored.\\n\\nAliases: `joinDeep`\\n\\n```lua\\nlocal dictionary1 = { hello = \\"roblox\\", goodbye = { world = \\"goodbye\\" } }\\nlocal dictionary2 = { goodbye = { world = \\"world\\" } }\\n\\nlocal merged = MergeDeep(dictionary1, dictionary2) -- { hello = \\"roblox\\", goodbye = { world = \\"world\\" } }\\n```","params":[{"name":"dictionaries?","desc":"The dictionaries to merge.","lua_type":"...any"}],"returns":[{"desc":"The merged dictionary.","lua_type":"T"}],"function_type":"static","source":{"line":28,"path":"src/Dictionary/mergeDeep.lua"}},{"name":"update","desc":"Updates a value in a dictionary at the given key. If the value at the given key does not exist, `callback` will be called, and its return value will be used as the value at the given key.\\n\\n```lua\\nlocal dictionary = { cats = 2 }\\n\\nlocal new = Update(dictionary, \\"cats\\", function(value)\\n  return value + 1\\nend) -- { cats = 3 }\\n\\nlocal new = Update(dictionary, \\"dogs\\", function(value)\\n  return value + 1\\nend, function(value)\\n  return 1\\nend) -- { cats = 3, dogs = 1 }\\n```","params":[{"name":"dictionary","desc":"The dictionary to update.","lua_type":"{[K]: V}"},{"name":"key","desc":"The key to update.","lua_type":"K"},{"name":"updater?","desc":"The updater function.","lua_type":"(value: V, key: K) -> U"},{"name":"callback?","desc":"The callback function.","lua_type":"(key: K) -> C"}],"returns":[{"desc":"The updated dictionary.","lua_type":"{[K]: V & U & C }"}],"function_type":"static","source":{"line":42,"path":"src/Dictionary/update.lua"}},{"name":"some","desc":"Checks whether or not the predicate returned true for any value in the dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", cat = \\"meow\\", unicorn = \\"rainbow\\" }\\n\\nlocal hasMeow = Some(dictionary, function(value)\\n  return value == \\"meow\\"\\nend) -- true\\n\\nlocal hasDog = Some(dictionary, function(_, key)\\n  return key == \\"dog\\"\\nend) -- false\\n```","params":[{"name":"dictionary","desc":"The dictionary to check.","lua_type":"{[K]: V}"},{"name":"predicate","desc":"The predicate to check against.","lua_type":"(value: V, key: K, dictionary: { [K]: V }) -> any"}],"returns":[{"desc":"Whether or not the predicate returned true for any value.","lua_type":"boolean"}],"function_type":"static","source":{"line":24,"path":"src/Dictionary/some.lua"}},{"name":"filter","desc":"Filters a dictionary using a predicate. Any items that do not pass the predicate will be removed from the dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", goodbye = \\"goodbye\\" }\\n\\nlocal result = Filter(dictionary, function(value, key)\\n  return value == \\"world\\"\\nend) -- { hello = \\"world\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to filter.","lua_type":"{[K]: V}"},{"name":"predicate?","desc":"The predicate to use to filter the dictionary.","lua_type":"(value: V, key: K, dictionary: {[K]: V}) -> any"}],"returns":[{"desc":"The filtered dictionary.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":24,"path":"src/Dictionary/filter.lua"}},{"name":"removeKey","desc":"Removes the given key from the given dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal withoutHello = RemoveKey(dictionary, \\"hello\\") -- { goodbye = \\"world\\" }\\nlocal withoutGoodbye = RemoveKey(dictionary, \\"goodbye\\") -- { hello = \\"roblox\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to remove the key from.","lua_type":"{[K]: V}"},{"name":"key","desc":"The key to remove.","lua_type":"K"}],"returns":[{"desc":"The dictionary without the given key.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":21,"path":"src/Dictionary/removeKey.lua"}},{"name":"every","desc":"Checks whether every item in the dictionary passes the predicate.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", goodbye = \\"world\\" }\\n\\nlocal value = Every(dictionary, function(value, key)\\n  return value == \\"world\\"\\nend) -- true\\n\\nlocal value = Every(dictionary, function(value, key)\\n  return value == \\"hello\\"\\nend) -- false\\n```","params":[{"name":"dictionary","desc":"The dictionary to check.","lua_type":"{[K]: V}"},{"name":"predicate","desc":"The predicate to use to check the dictionary.","lua_type":"(value: V, key: K, dictionary: {[K]: V}) -> any"}],"returns":[{"desc":"Whether every item in the dictionary passes the predicate.","lua_type":"boolean"}],"function_type":"static","source":{"line":24,"path":"src/Dictionary/every.lua"}},{"name":"flip","desc":"Flips a dictionary. Keys become values and values become keys.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal new = Flip(dictionary) -- { world = \\"goodbye\\", roblox = \\"hello\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to flip.","lua_type":"{ [K]: V }"}],"returns":[{"desc":"The flipped dictionary.","lua_type":"{ [V]: K }"}],"function_type":"static","source":{"line":17,"path":"src/Dictionary/flip.lua"}},{"name":"flatten","desc":"Flattens a dictionary. If depth is not specified, it will flatten the dictionary as far as it can go.\\n\\n```lua\\nlocal dictionary = {\\n  hello = \\"world\\",\\n  goodbye = {\\n    world = \\"hello\\",\\n    roblox = {\\n      yes = \\"no\\",\\n      no = \\"yes\\",\\n    }\\n  }\\n}\\n\\nlocal new = Flatten(dictionary) -- { hello = \\"world\\", world = \\"hello\\", yes = \\"no\\", no = \\"yes\\" }\\nlocal new = Flatten(dictionary, 1) -- { hello = \\"world\\", world = \\"hello\\", roblox = { yes = \\"no\\", no = \\"yes\\" } }\\n```","params":[{"name":"dictionary","desc":"The dictionary to flatten.","lua_type":"T"},{"name":"depth?","desc":"The depth to flatten the dictionary to.","lua_type":"number"}],"returns":[{"desc":"The flattened dictionary.","lua_type":"T"}],"function_type":"static","source":{"line":30,"path":"src/Dictionary/flatten.lua"}},{"name":"equals","desc":"Compares two dictionaries for equality.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", goodbye = \\"world\\" }\\nlocal other1 = { hello = \\"world\\", goodbye = \\"world\\" }\\nlocal other2 = { hello = \\"hello\\", world = \\"goodbye\\" }\\n\\nlocal value = Equals(dictionary, other1) -- true\\nlocal value = Equals(dictionary, other1, other2) -- false\\n```","params":[{"name":"...","desc":"The dictionaries to compare.","lua_type":"...{ [any]: any }"}],"returns":[{"desc":"Whether the dictionaries are equal.","lua_type":"boolean"}],"function_type":"static","source":{"line":45,"path":"src/Dictionary/equals.lua"}},{"name":"entries","desc":"Returns the entries in the given dictionary as an array of key-value pairs.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal entries = Entries(dictionary) -- { { \\"hello\\", \\"roblox\\" }, { \\"goodbye\\", \\"world\\" } }\\n```","params":[{"name":"dictionary","desc":"The dictionary to get the entries from.","lua_type":"{[K]: V}"}],"returns":[{"desc":"The entries in the dictionary.","lua_type":"{{ K, V }}"}],"function_type":"static","source":{"line":17,"path":"src/Dictionary/entries.lua"}},{"name":"freezeDeep","desc":"Freezes the entire dictionary, making it read-only, including all nested dictionaries.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = { world = \\"world\\" } }\\n\\nlocal new = FreezeDeep(dictionary)\\n\\nnew.hello = \\"world\\" -- error!\\nnew.goodbye.world = \\"hello\\" -- error!\\n```","params":[{"name":"dictionary","desc":"The dictionary to freeze.","lua_type":"T"}],"returns":[{"desc":"The frozen dictionary.","lua_type":"T"}],"function_type":"static","source":{"line":22,"path":"src/Dictionary/freezeDeep.lua"}},{"name":"has","desc":"Checks whether or not the given dictionary has the given key.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal hasHello = Has(dictionary, \\"hello\\") -- true\\nlocal hasCat = Has(dictionary, \\"cat\\") -- false\\n```","params":[{"name":"dictionary","desc":"The dictionary to check.","lua_type":"{[K]: V}"},{"name":"key","desc":"The key to check for.","lua_type":"any"}],"returns":[{"desc":"Whether or not the dictionary has the given key.","lua_type":"boolean"}],"function_type":"static","source":{"line":21,"path":"src/Dictionary/has.lua"}},{"name":"set","desc":"Sets the given value in the given dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", cat = \\"meow\\", unicorn = \\"rainbow\\" }\\n\\nlocal setCat = Set(dictionary, \\"cat\\", \\"woof\\") -- { hello = \\"world\\", cat = \\"woof\\", unicorn = \\"rainbow\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to set the value in.","lua_type":"{[K]: V}"},{"name":"key","desc":"The key to set the value in.","lua_type":"K"},{"name":"value","desc":"The value to set.","lua_type":"V"}],"returns":[{"desc":"The dictionary with the given value set.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":21,"path":"src/Dictionary/set.lua"}},{"name":"values","desc":"Gets the values in the given dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = \\"world\\" }\\n\\nlocal values = Values(dictionary) -- { \\"roblox\\", \\"world\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to get the values from.","lua_type":"{[K]: V}"}],"returns":[{"desc":"The values in the dictionary.","lua_type":"{V}"}],"function_type":"static","source":{"line":17,"path":"src/Dictionary/values.lua"}},{"name":"merge","desc":"Merges the given dictionaries into a single dictionary. If the\\nvalue is `None`, it will be removed from the result. The\\nparameters may be any number of dictionaries or `nil`.\\nNon-dictonaries will be ignored.\\n\\nAliases: `join`\\n\\n```lua\\nlocal dictionary1 = { hello = \\"roblox\\", goodbye = \\"world\\" }\\nlocal dictionary2 = { goodbye = \\"goodbye\\" }\\n\\nlocal merged = Merge(dictionary1, dictionary2) -- { hello = \\"roblox\\", goodbye = \\"goodbye\\" }\\n```","params":[{"name":"dictionaries?","desc":"The dictionaries to merge.","lua_type":"...any"}],"returns":[{"desc":"The merged dictionary.","lua_type":"T"}],"function_type":"static","source":{"line":27,"path":"src/Dictionary/merge.lua"}},{"name":"freeze","desc":"Freezes the given dictionary at the top level, making it read-only.\\n\\n```lua\\nlocal dictionary = { hello = \\"roblox\\", goodbye = { world = \\"world\\" } }\\n\\nlocal new = Freeze(dictionary)\\n\\nnew.hello = \\"world\\" -- error!\\nnew.goodbye.world = \\"hello\\" -- still works!\\n```","params":[{"name":"dictionary","desc":"The dictionary to freeze.","lua_type":"T"}],"returns":[{"desc":"The frozen dictionary.","lua_type":"T"}],"function_type":"static","source":{"line":23,"path":"src/Dictionary/freeze.lua"}},{"name":"fromEntries","desc":"Creates a dictionary from the given key-value pairs.\\n\\n```lua\\nlocal entries = { { \\"hello\\", \\"roblox\\" }, { \\"goodbye\\", \\"world\\" } }\\n\\nlocal dictionary = FromEntries(entries) -- { hello = \\"roblox\\", goodbye = \\"world\\" }\\n```","params":[{"name":"entries","desc":"An array of key-value pairs.","lua_type":"{{ K, V }}"}],"returns":[{"desc":"A dictionary composed of the given key-value pairs.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":17,"path":"src/Dictionary/fromEntries.lua"}},{"name":"fromArrays","desc":"Creates a dictionary from the given arrays, where the first array is used\\nas keys and the second array is used as values.\\n\\n```lua\\nlocal keys = { \\"hello\\", \\"goodbye\\" }\\nlocal values = { \\"roblox\\", \\"world\\" }\\n\\nlocal dictionary = FromArrays(keys, values) -- { hello = \\"roblox\\", goodbye = \\"world\\" }\\n```","params":[{"name":"keys","desc":"An array containing values to be used as keys.","lua_type":"{K}"},{"name":"values","desc":"An array containing values to be used as values.","lua_type":"{V}"}],"returns":[{"desc":"A dictionary composed of the given keys and values.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":20,"path":"src/Dictionary/fromArrays.lua"}},{"name":"copy","desc":"Copies a dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\" }\\n\\nlocal new = Copy(dictionary) -- { hello = \\"world\\" }\\n\\nprint(new == dictionary) -- false\\nprint(new.hello == dictionary.hello) -- true\\n```","params":[{"name":"dictionary","desc":"The dictionary to copy.","lua_type":"T"}],"returns":[{"desc":"The copied dictionary.","lua_type":"T"}],"function_type":"static","source":{"line":20,"path":"src/Dictionary/copy.lua"}},{"name":"removeValues","desc":"Removes the given values from the given dictionary.\\n\\n```lua\\nlocal dictionary = { hello = \\"world\\", cat = \\"meow\\", unicorn = \\"rainbow\\", goodbye = \\"world\\" }\\n\\nlocal withoutWorld = RemoveValues(dictionary, \\"world\\") -- { cat = \\"meow\\", unicorn = \\"rainbow\\" }\\nlocal onlyWorld = RemoveValues(dictionary, \\"meow\\", \\"rainbow\\") -- { hello = \\"world\\", goodbye = \\"world\\" }\\n```","params":[{"name":"dictionary","desc":"The dictionary to remove the values from.","lua_type":"{[K]: V}"},{"name":"values","desc":"The values to remove.","lua_type":"...V"}],"returns":[{"desc":"The dictionary without the given values.","lua_type":"{[K]: V}"}],"function_type":"static","source":{"line":23,"path":"src/Dictionary/removeValues.lua"}},{"name":"map","desc":"Maps the dictionary using the mapper function. The mapper function can\\nreturn a value and a key. If the mapper function does not return a key,\\nthe original key will be used.\\n\\n```lua\\nlocal dictionary = { hello = 10, goodbye = 20 }\\n\\nlocal new = Map(dictionary, function(value, key)\\n  return value * 2, key .. \\"!\\"\\nend) -- { [\\"hello!\\"] = 20, [\\"goodbye!\\"] = 40 }\\n\\nlocal new = Map(dictionary, function(value, key)\\n  return value * 10\\nend) -- { hello = 100, goodbye = 200 }\\n```","params":[{"name":"dictionary","desc":"The dictionary to map.","lua_type":"{[K]: V}"},{"name":"mapper","desc":"The mapper function.","lua_type":"(value: V, key: K, dictionary: {[K]: V}) -> (Y?, X?)"}],"returns":[{"desc":"The mapped dictionary.","lua_type":"{[X]: Y}"}],"function_type":"static","source":{"line":26,"path":"src/Dictionary/map.lua"}}],"properties":[],"types":[],"name":"Dictionary","desc":"Dictionaries are a type of data structure that can be used to store key-value pairs.\\n\\n```lua\\nlocal dictionary = {\\n\\tcats = 2,\\n\\tdogs = 1\\n}\\n\\nprint(dictionary.cats) -- 2\\n```","source":{"line":16,"path":"src/Dictionary/init.lua"}}')}}]);