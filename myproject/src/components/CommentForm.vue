<template>
    <div class="flex mx-auto items-center justify-center shadow-lg mx-8 mb-4">
        <form class="w-full bg-white rounded-lg px-4 pt-2" @submit.prevent="comment_create">
            <div class="flex -mx-3">
                <div class="px-3 mb-2 mt-2">
                    <textarea cols="60" @keydown.enter.exact.prevent="comment_create" class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-black" name="body" placeholder='Type Your Comment' required v-model.trim="content"></textarea>
                </div>
                <div class="flex items-end px-3 mb-2 mt-2">
                    <input type='submit' class="bg-blue-700 text-white text-bold font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post'>
                </div>
            </div>
        </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "CommentForm",
    props: {
        mid: Number,
    },
    data() {
        return {
            content: null,
        }
    },
    methods: {
        comment_create() {
            if (this.content) {
                const BASE_URL = "http://127.0.0.1:8000/"
                const URL = `movies/${this.mid}/comment/`
                axios.post(BASE_URL + URL, 
                    {
                        "content" : this.content,
                    },
                    {
                        "headers": {
                            "Authorization": `Token ${this.$store.state.token}`,
                        },
                    }
                )
                .then((response) => {
                    const newComment = response.data
                    this.$emit("created_comment", newComment)
                    this.content = ""
    
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style>

</style>