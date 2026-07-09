// ---------- Mobile sidebar toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
    sidebar.querySelectorAll('.nav-item').forEach(a =>
      a.addEventListener('click', () => sidebar.classList.remove('open'))
    );
  }

  // ---------- Quiz engine: works on any [data-quiz] block ----------
  document.querySelectorAll('[data-quiz]').forEach(quiz => {
    const blocks = [...quiz.querySelectorAll('.q-block')];
    const total = blocks.length;
    const totSpan = quiz.querySelector('.tot');
    if (totSpan) totSpan.textContent = total;
    let idx = 0, score = 0;
    const answered = new Array(total).fill(false);
    const prevBtn = quiz.querySelector('[data-prev]');
    const nextBtn = quiz.querySelector('[data-next]');
    const curSpan = quiz.querySelector('.cur');
    const resultBox = quiz.querySelector('.quiz-result');

    function render() {
      blocks.forEach((b, i) => b.classList.toggle('active', i === idx));
      if (curSpan) curSpan.textContent = idx + 1;
      if (prevBtn) prevBtn.disabled = idx === 0;
      if (nextBtn) nextBtn.textContent = idx === total - 1 ? '查看得分' : '下一题';
    }

    blocks.forEach((block, i) => {
      const opts = [...block.querySelectorAll('.q-opt')];
      const ans = parseInt(block.dataset.answer, 10);
      const explain = block.querySelector('.q-explain');
      opts.forEach((opt, oi) => {
        opt.addEventListener('click', () => {
          if (answered[i]) return;
          answered[i] = true;
          opts.forEach((o, k) => {
            if (k === ans) o.classList.add('correct');
            else if (k === oi) o.classList.add('wrong');
          });
          if (oi === ans) score++;
          if (explain) explain.classList.add('show');
        });
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => { if (idx > 0) { idx--; render(); } });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      if (idx < total - 1) { idx++; render(); }
      else {
        blocks.forEach(b => b.classList.remove('active'));
        if (resultBox) {
          resultBox.classList.add('show');
          resultBox.querySelector('.score').textContent = score + ' / ' + total;
        }
      }
    });
    render();
  });

  // ---------- Interactive eye diagram (homepage) ----------
  const eyeSvg = document.getElementById('eyeDiagram');
  if (eyeSvg) {
    document.querySelectorAll('.legend-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.target;
        eyeSvg.classList.add('dim');
        document.querySelectorAll('.eye-part').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.eye-part[data-id="' + id + '"]').forEach(p => p.classList.add('active'));
        const link = row.dataset.link;
        if (link) window.location.href = link;
      });
    });
  }
});
