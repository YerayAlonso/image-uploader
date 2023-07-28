<script>
  import Uploader from '$lib/components/Uploader.svelte'
  import Uploading from '$lib/components/Uploading.svelte'
  import Uploaded from '$lib/components/Uploaded.svelte'

  const statuses = Object.freeze({
    none: 0,
    uploading: 1,
    uploaded: 2
  })

  let status = statuses.uploaded

  const toggleStatus = () => {
    if (status === statuses.none) {
      status = statuses.uploading
      return
    }
    if (status === statuses.uploading) {
      status = statuses.uploaded
      return
    }
    if (status === statuses.uploaded) {
      status = statuses.none
      return
    }
  }
</script>

<svelte:window on:dblclick={toggleStatus} />

{#if status === statuses.none}
  <Uploader />
{/if}

{#if status === statuses.uploading}
  <Uploading />
{/if}

{#if status === statuses.uploaded}
  <Uploaded />
{/if}
