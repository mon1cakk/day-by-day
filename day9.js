/**
 * // 将树状结构转换为属性平铺的结构
  const entry = {
    a: {
      b: {
        c: {
          dd: 'abcdd',
        },
      },
      d: {
        ee: 'adee',
      },
      f: 'af',
    },
  };
  // 要求转换成如下对象
  const output = {
    'a.b.c.dd': 'abcdd',
    'a.d.ee': 'adee',
    'a.f': 'af',
  };
 */

  function treeToObject(tree, prevKey = '', result = {}) {
    for(let key in tree) {
      if(tree.hasOwnProperty(key)) {
        const newKey = `${prevKey}${key}`;
        if(typeof tree[key] === 'object') {
          treeToObject(tree[key], `${newKey}.`, result)
        }else {
          result[newKey] = tree[key]
        }
      }
    }
    return result
  }
  const entry = {
    a: {
      b: {
        c: {
          dd: 'abcdd',
        },
      },
      d: {
        ee: 'adee',
      },
      f: 'af',
    },
  };
  console.log(treeToObject(entry));