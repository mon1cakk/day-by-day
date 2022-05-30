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