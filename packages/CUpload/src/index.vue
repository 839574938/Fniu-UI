<template>
  <el-upload
      v-model:file-list="fileList"
      :action="action"
      :on-success="handleSuccess"
      :before-upload="handleBeforeUpload"
      v-bind="$attrs"
  >
    <template #default>
      <slot>
        <el-button type="primary">上传图片</el-button>
      </slot>
    </template>
    <template #tip>
      <slot name="tip"></slot>
    </template>
  </el-upload>
</template>

<script lang="ts">export default {name: "CUpload"}</script>
<script lang="ts" setup>
import 'vue-cropper/dist/index.css'
import {VueCropper} from "vue-cropper";
import {UploadProps, UploadRawFile, UploadUserFile, ElMessage, UploadFile, UploadFiles} from "element-plus";
import {Awaitable} from "element-plus/es/utils";
import {ref} from "vue";
import {ErrorCode, ErrorInfo, IUploadError} from "./interface";

interface IUploadProps {
  action?: string,
  fileList?: UploadUserFile[]
  fileType?: string, // 文件类型
  fileSize?: number,  // 文件大小
  onError?: (error: IUploadError) => void
  onBeforeUpload?: (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>
  onSuccess?: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
}

const props = withDefaults(defineProps<IUploadProps>(), {
  action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
  onError: (error: IUploadError) => {
    ElMessage.error(error.errorInfo);
  }
})

const loading = ref<boolean>(false);
const handleBeforeUpload: (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob> = (file) => {
  const fileName = file.name;
  const ext = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
  if (props.fileType) { // 限制文件格式
    if (props.fileType.indexOf(ext) < 0) {
      const errInfo = {
        errorCode: ErrorCode.fileType,
        errorInfo: ErrorInfo.fileType,
      }
      props.onError && props.onError(errInfo);
      return false;
    }
  }
  if (props.fileSize) { // 限制文件大小，单位为k
    if (file.size / 1024 > props.fileSize) {
      const errInfo = {
        errorCode: ErrorCode.fileSize,
        errorInfo: ErrorInfo.fileSize,
      }
      props.onError && props.onError(errInfo);
      return false;
    }
  }
  loading.value = true; // 开启上传中状态
  if (props.onBeforeUpload) {
    props.onBeforeUpload(file);
  }
}

const handleSuccess: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void = (response, uploadFile, uploadFiles) => {
  if (props.onSuccess) {
    props.onSuccess(response, uploadFile, uploadFiles);
  }
}

</script>

<style scoped lang="less">

</style>
