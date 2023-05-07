function showSection(sectionId) {
    // 모든 섹션을 숨김
    const sections = document.getElementsByTagName('section');
    for (const section of sections) {
        section.style.display = 'none';
    }

    // 선택된 섹션만 표시
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// 초기 화면 설정
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});