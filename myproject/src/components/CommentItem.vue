<template>
  <div class="flex items-center space-x-2">
    <div
      class="flex flex-col items-center flex-shrink-0 self-start cursor-pointer"
    >
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
        alt=""
        class="h-8 w-8 object-fill rounded-full"
      />
      <small class="hover:underline text-xs text-white">{{
        comment?.author.username
      }}</small>
    </div>
    <div class="flex items-center justify-center space-x-2 w-full">
      <div class="block w-full">
        <div class="flex space-x-2 w-full">
          <div class="bg-gray-400 w-auto rounded-xl px-2 pb-2 w-full">
            <p class="text-left w-full py-1 px-2" style="width: 700px; word-wrap: break-word;">
              {{ comment?.content }}
            </p>
          </div>
        </div>
        <div class="flex justify-end items-center text-lg w-full">
          <div
            class="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1"
          >
            <a href="#" class="hover:underline text-white">
              <small> {{ comment?.created_at | yyyyMMdd }}</small>
            </a>
          </div>
        </div>
        <!-- New Subcomment Paste Here !! -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: Object,
  },
  filters: {
    yyyyMMdd: function (value) {
      if (value == "") return "";

      var js_date = new Date(value);

      var year = js_date.getFullYear();
      var month = js_date.getMonth() + 1;
      var day = js_date.getDate();

      if (month < 10) {
        month = "0" + month;
      }

      if (day < 10) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day;
    },
  },
};
</script>

<style></style>
