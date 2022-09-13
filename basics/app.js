document.addEventListener("alpine:init", () => {
    Alpine.data("dropdown", () => ({
        open: false,
        toggle(){
            this.open = !this.open
        }
    }));

    Alpine.data("newitem", () => ({
        message: 'Hello Mr..',
        change(){
            this.message = 'Hi Mrs...'
        }
    }))

    Alpine.store("userdata", {
        username: 'victor',
        post: ['post1', 'post2']
    })

    Alpine.data("design", () => ({
        clicked: false,
        change(){
            this.clicked = !this.clicked
        }
    }))
})

