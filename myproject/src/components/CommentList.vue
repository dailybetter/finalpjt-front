<template>
  <div>
    <!-- component -->
    <div class="flex flex-col justify-center items-center">
      <div
        class="w-full h-auto shadow px-48 py-2 flex flex-col space-y-2 font-bold text-lg text-black"
      >
        <CommentItem
          v-for="(comment, idx) in commentList"
          :key="'comment-' + idx"
          :comment="comment"
        />
        <CommentForm :mid="mid" @created_comment="add_created_comment" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentItem from "@/components/CommentItem";
import CommentForm from "@/components/CommentForm";
export default {
  name: "commentList",
  props: {
    mid: Number,
  },
  components: {
    CommentItem,
    CommentForm,
  },
  data() {
    return {
      commentList: [],
    };
  },
  created() {
    const BASE_URL = "http://127.0.0.1:8000/";
    const URL = `movies/${this.mid}/comment/`;

    axios
      .get(BASE_URL + URL)
      .then((response) => {
        this.commentList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    add_created_comment(newComment) {
      this.commentList.push(newComment);
    },
  },
};
</script>

<style></style>
