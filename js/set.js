window.Set =
  window.Set ||
  (function() {
    function Set(arr) {
      this.items = arr ? unique(arr) : []
      this.size = this.items.length // Array的大小
    }
    Set.prototype = {
      add: function(value) {
        // 添加元素,若元素已存在,则跳过，返回 Set 结构本身。
        if (!this.has(value)) {
          this.items.push(value)
          this.size++
        }
        return this
      },
      clear: function() {
        //清除所有成员，没有返回值。
        this.items = []
        this.size = 0
      },
      delete: function(value) {
        //删除某个值，返回一个布尔值，表示删除是否成功。
        return this.items.some((v, i) => {
          if (v === value) {
            this.items.splice(i, 1)
            return true
          }
          return false
        })
      },
      has: function(value) {
        //返回一个布尔值，表示该值是否为Set的成员。
        return this.items.some(v => v === value)
      },
      values: function() {
        return this.items
      }
    }

    return Set
  })()
