<script lang="ts" setup>
import { toast } from "vue-sonner";
import { useDeleteUrl } from "../shared/hooks/getAllUrl";

export interface RemoveUrlProps {
  id: string;
}
const { id } = defineProps<RemoveUrlProps>();

const { mutate, isPending } = useDeleteUrl(id);
const deleteurl = async () => {
  try {
    await mutate();
    toast("deleted", {
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
    });
  } catch (e) {
    console.log("error", e);
  }
};
</script>
<template>
  <RippleButton :disabled="isPending" @click="deleteurl">
    <span v-if="isPending" class="flex items-center gap-2">
      <Spinner class="w-4 h-4" /> Deleting...
    </span>
    <span v-else>Delete</span>
  </RippleButton>
</template>
