<script>
  import Uploader from '$lib/components/Uploader.svelte'
  import Uploading from '$lib/components/Uploading.svelte'
  import Uploaded from '$lib/components/Uploaded.svelte'

  let files
  let imageSrc

  const statuses = Object.freeze({
    none: 0,
    uploading: 1,
    uploaded: 2
  })

  let status = statuses.none

  $: if (files && files[0]) {
    status = statuses.uploading

    postImage(files[0])
  }

  async function postImage(file) {
    const body = new FormData()
    body.append('file', file)

    const res = await fetch('/api/images', {
      method: 'POST',
      body
    })

    if (res.ok) {
      const data = await res.json()
      imageSrc = data.imageSrc
      status = statuses.uploaded
    }
  }
</script>

{#if status === statuses.none}
  <Uploader bind:files />
{/if}

{#if status === statuses.uploading}
  <Uploading />
{/if}

{#if status === statuses.uploaded}
  <Uploaded {imageSrc} />
{/if}
