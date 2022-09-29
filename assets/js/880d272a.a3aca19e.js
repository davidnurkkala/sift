"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[715],{14245:e=>{e.exports=JSON.parse('{"functions":[{"name":"intersection","desc":"Creates the intersection of multiple sets. The intersection\\nis when both sets have a value in common. Unmatched values\\nare discarded.\\n\\n```lua\\nlocal set1 = { hello = true, world = true }\\nlocal set2 = { world = true, universe = true }\\n\\nlocal intersection = Intersection(set1, set2) -- { world = true }\\n```","params":[{"name":"...","desc":"The sets to intersect.","lua_type":"...{ [any]: boolean }"}],"returns":[{"desc":"The intersection of the sets.","lua_type":"{ [T]: boolean }"}],"function_type":"static","source":{"line":20,"path":"src/Set/intersection.lua"}},{"name":"delete","desc":"Deletes values from a set.\\n\\nAliases: `subtract`\\n\\n```lua\\nlocal set = { hello = true, world = true }\\n\\nlocal newSet = Delete(set, \\"hello\\") -- { world = true }\\n```","params":[{"name":"set","desc":"The set to delete from.","lua_type":"{ [T]: boolean }"},{"name":"...","desc":"The values to delete.","lua_type":"...T"}],"returns":[{"desc":"The set with the values deleted.","lua_type":"{ [T]: boolean }"}],"function_type":"static","source":{"line":20,"path":"src/Set/delete.lua"}},{"name":"isSubset","desc":"Checks whether a set is a subset of another set.\\n\\n```lua\\nlocal set = { hello = true, world = true }\\nlocal subset = { hello = true }\\n\\nlocal isSubset = IsSubset(subset, set) -- true\\n```","params":[{"name":"subset","desc":"The subset to check.","lua_type":"{ [any]: boolean }"},{"name":"superset","desc":"The superset to check against.","lua_type":"{ [any]: boolean }"}],"returns":[{"desc":"Whether the subset is a subset of the superset.","lua_type":"boolean"}],"function_type":"static","source":{"line":19,"path":"src/Set/isSubset.lua"}},{"name":"toArray","desc":"Converts a set to an array.\\n\\n```lua\\nlocal set = { hello = true, world = true }\\n\\nlocal array = ToArray(set) -- { \\"hello\\", \\"world\\" }\\n```","params":[{"name":"set","desc":"The set to convert to an array.","lua_type":"{ [T]: boolean }"}],"returns":[{"desc":"The array.","lua_type":"{T}"}],"function_type":"static","source":{"line":17,"path":"src/Set/toArray.lua"}},{"name":"copy","desc":"Creates a copy of a set.\\n\\n```lua\\nlocal set = { hello = true }\\n\\nlocal newSet = Copy(set) -- { hello = true }\\n```","params":[{"name":"set","desc":"The set to copy.","lua_type":"{ [T]: boolean }"}],"returns":[{"desc":"A copy of the set.","lua_type":"{ [T]: boolean }"}],"function_type":"static","source":{"line":21,"path":"src/Set/copy.lua"}},{"name":"fromArray","desc":"Converts an array to a set, where each item is mapped to true.\\nDuplicate items are discarded.\\n\\nAliases: `fromList`\\n\\n```lua\\nlocal array = { \\"hello\\", \\"world\\", \\"hello\\" }\\n\\nlocal set = FromArray(array) -- { hello = true, world = true }\\n```","params":[{"name":"array","desc":"The array to convert to a set.","lua_type":"{T}"}],"returns":[{"desc":"The set.","lua_type":"{[T]: boolean}"}],"function_type":"static","source":{"line":20,"path":"src/Set/fromArray.lua"}},{"name":"add","desc":"Adds values to a set.\\n\\n```lua\\nlocal set = { hello = true }\\n\\nlocal newSet = Add(set, \\"world\\") -- { hello = true, world = true }\\n```","params":[{"name":"set","desc":"The set to add the value to.","lua_type":"{ [T]: boolean }"},{"name":"...","desc":"The values to add.","lua_type":"...T"}],"returns":[{"desc":"The set with the values added.","lua_type":"{ [T]: boolean }"}],"function_type":"static","source":{"line":18,"path":"src/Set/add.lua"}},{"name":"filter","desc":"Filters a set using a predicate. Any items that do not pass the predicate will be removed from the set.\\n\\n```lua\\nlocal set = { hello = true, world = true }\\n\\nlocal newSet = Filter(set, function(value)\\n  return value ~= \\"hello\\"\\nend) -- { world = true }\\n```","params":[{"name":"set","desc":"The set to filter.","lua_type":"{ [T]: boolean }"},{"name":"predicate?","desc":"The function to filter the set with.","lua_type":"(item: T, set: { [T]: boolean }) -> any"}],"returns":[{"desc":"The filtered set.","lua_type":"{ [T]: boolean }"}],"function_type":"static","source":{"line":24,"path":"src/Set/filter.lua"}},{"name":"merge","desc":"Combines one or more sets into a single set.\\n\\nAliases: `join`, `union`\\n\\n```lua\\nlocal set1 = { hello = true, world = true }\\nlocal set2 = { cat = true, dog = true, hello = true }\\n\\nlocal merge = Merge(set1, set2) -- { hello = true, world = true, cat = true, dog = true }\\n```","params":[{"name":"...","desc":"The sets to merge.","lua_type":"...any"}],"returns":[{"desc":"The merged set.","lua_type":"{ [T]: boolean }"}],"function_type":"static","source":{"line":20,"path":"src/Set/merge.lua"}},{"name":"map","desc":"Iterates over a set, calling a mapper function for each item.\\n\\n```lua\\nlocal set = { hello = true, world = true }\\n\\nlocal mappedSet = Map(set, function(value)\\n  return value .. \\"!\\"\\nend) -- { [\\"hello!\\"] = true, [\\"world!\\"] = true }\\n```","params":[{"name":"set","desc":"The set to map.","lua_type":"{ [T]: boolean }"},{"name":"mapper","desc":"The mapper function.","lua_type":"(T, {[T]: boolean}) -> U"}],"returns":[{"desc":"The mapped set.","lua_type":"{[U]: boolean}"}],"function_type":"static","source":{"line":20,"path":"src/Set/map.lua"}},{"name":"has","desc":"Checks whether a value is in a set.\\n\\n```lua\\nlocal set = { hello = true }\\n\\nlocal has = Has(set, \\"hello\\") -- true\\n```","params":[{"name":"set","desc":"The set to check.","lua_type":"{ [T]: boolean }"},{"name":"value","desc":"The value to check for.","lua_type":"any"}],"returns":[{"desc":"Whether the value is in the set.","lua_type":"boolean"}],"function_type":"static","source":{"line":18,"path":"src/Set/has.lua"}},{"name":"isSuperset","desc":"Checks whether a set is a superset of another set.\\n\\n```lua\\nlocal set = { hello = true, world = true }\\nlocal subset = { hello = true }\\n\\nlocal isSuperset = IsSuperset(set, subset) -- true\\n```","params":[{"name":"superset","desc":"The superset to check.","lua_type":"{ [any]: boolean }"},{"name":"subset","desc":"The subset to check against.","lua_type":"{ [any]: boolean }"}],"returns":[{"desc":"Whether the superset is a superset of the subset.","lua_type":"boolean"}],"function_type":"static","source":{"line":21,"path":"src/Set/isSuperset.lua"}},{"name":"count","desc":"Counts the number of items in a set.\\n\\n```lua\\nlocal set = { hello = true, world = true }\\n\\nlocal count = Count(set) -- 2\\nlocal count = Count(set, function(item)\\n  return item == \\"hello\\"\\nend) -- 1\\n```","params":[{"name":"set","desc":"The set to count.","lua_type":"{ [T]: boolean }"},{"name":"predicate?","desc":"The predicate to use to count.","lua_type":"(item: T, set: { [T]: boolean }) -> boolean?"}],"returns":[{"desc":"The number of items in the set.","lua_type":"number"}],"function_type":"static","source":{"line":25,"path":"src/Set/count.lua"}}],"properties":[],"types":[],"name":"Set","desc":"Sets are a collection of values. They are used to store unique values.\\nThey are essentially a dictionary, but each value is stored as a boolean.\\nThis means that a value can only be in a set once.\\n\\n```lua\\nlocal set = { hello = true }\\n\\nlocal newSet = Add(set, \\"world\\") -- { hello = true, world = true }\\n```","source":{"line":15,"path":"src/Set/init.lua"}}')}}]);