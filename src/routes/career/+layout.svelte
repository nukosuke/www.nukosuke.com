<script lang="ts">
  let { children } = $props();
</script>

<div class="py-8">
  <div class="rounded-b-sm bg-white px-12 py-8 md:rounded-t-sm">
    <div class="prose mx-auto">
      {@render children()}
    </div>
  </div>
</div>
