<template>
  <footer class="sidebar-footer">
    <figure class="sidebar-footer-icon material-symbols-outlined">
      person
    </figure>
    <section>
      <h2 class="username">Guilherme Neves</h2>
      <h3 class="role">Administrador</h3>
    </section>
  </footer>
</template>

<style scoped>
.sidebar-footer {
  margin-top: auto;
  border-top: 0.1px solid var(--color-border);
  padding-top: var(--spacing-4);
}

.sidebar-footer {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}
.sidebar-footer-icon {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
}

.sidebar-footer .username,
.sidebar-footer .role {
  color: var(--color-on-primary);
}

.sidebar-footer .username {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-1);
}

.sidebar-footer .role {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-regular);
}
</style>
