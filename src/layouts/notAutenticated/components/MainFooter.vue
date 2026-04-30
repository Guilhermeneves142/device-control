<template>
  <footer class="main-footer">
    <div class="main-footer-brand">
      <div class="main-footer-logo">
        <div class="material-symbols-outlined main-footer-icon">
          important_devices
        </div>
        <div>
          <h1 class="title">Device Ctrl</h1>
          <h2 class="subtitle">controle de dispositivos</h2>
        </div>
      </div>
      <span class="brand-text"
        >A plataforma completa para gestão de dispositivos móveis da sua
        empresa.</span
      >
    </div>
    <div class="list-group">
      <strong class="list-title">Produto</strong>
      <ul>
        <li class="list-item">Recursos</li>
        <li class="list-item">Preços</li>
        <li class="list-item">Integrações</li>
        <li class="list-item">Novidades</li>
      </ul>
    </div>
    <div class="list-group">
      <strong class="list-title">Empresa</strong>
      <ul>
        <li class="list-item">Sobre nós</li>
        <li class="list-item">Carreiras</li>
        <li class="list-item">Blog</li>
        <li class="list-item">Contato</li>
      </ul>
    </div>
    <div class="list-group">
      <strong class="list-title">Suporte</strong>
      <ul>
        <li class="list-item">Central de ajuda</li>
        <li class="list-item">Documentação</li>
        <li class="list-item">Status do sistema</li>
        <li class="list-item">Fale conosco</li>
      </ul>
    </div>
    <div class="list-group">
      <strong class="list-title">Siga-nos</strong>
      <div class="social-media">
        <img src="/linkedin.png" width="20" />
        <img src="/instagram.png" width="20" />
        <img src="/youtube.png" width="20" />
      </div>

      <span class="privacity">Privacidade | Termos de uso</span>

      <div class="directs">ⓒ 2026 Device Control</div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  margin-top: var(--spacing-10);
  padding: var(--spacing-5) var(--spacing-20);
  background-color: var(--color-surface);
  border-top: 0.5px solid var(--color-border);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-20);
}

.main-footer-brand {
  grid-column: span 3;
  line-height: var(--line-height-tight);
}

.brand-text {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

.main-footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  margin-bottom: var(--spacing-3);
}

.main-footer-icon {
  background-color: var(--color-primary);
  border-radius: 1000px;
  width: 30px;
  height: 30px;
  display: flex;
  font-size: var(--font-size-sm);
  justify-content: center;
  align-items: center;
  color: var(--color-on-primary);
}

.title {
  color: var(--color-text-main);
  font-size: var(--font-size-sm);
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

.list-group {
  grid-column: span 2;
}

.list-title {
  font-size: var(--font-size-sm);
}

.list-group ul {
  margin-top: var(--spacing-3);
}

.list-item {
  font-size: var(--font-size-sm);
  list-style: none;
  padding: var(--spacing-2) var(--spacing-0);
  color: var(--color-text-secondary);
}

.list-item:hover {
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}

.social-media {
  margin-top: var(--spacing-3);
  margin-bottom: var(--spacing-6);
  display: flex;
  gap: var(--spacing-3);
  cursor: pointer;
}

.privacity {
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
}

.directs {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-top: var(--spacing-2);
}
</style>
