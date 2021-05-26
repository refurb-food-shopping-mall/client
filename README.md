# 🎉[푸드 리퍼브 프로젝트 client]

### ✨ 프로젝트 셋업 (해당 프로젝트에서 사용하는 모듈 일괄 설치) ✨
```
npm install
```

### ✨ 컴파일 & 개발용 핫 리로드 (프론트용 개발서버구동) ✨
```
npm run serve
```

### ✨ chokidar error 발생시 업데이트 ✨
```
npm update --force
```
</br></br></br>
# 개발설명서 🎨

1. git clone 후 npm i 로 관련 모듈을 먼저 설치한다.</br>
2. 본인의 해당 [페이지명].vue 파일 부분을 전담한다.</br>
3. vue 파일의 template영역 안에 html 코드를 작성하면 된다.</br>
4. 본인이 잘 만들고 있는지 실시간으로 확인하고 싶으면 "npm run serve" 명령어를 실행해 먼저 프론트 서버를 구동한다.</br>
5. 서버를 구동한 후 크롬창에 localhost:8080/[페이지명] 이런식으로 들어가서 확인한다.</br>
</br></br>

### 페이지 분담 🎈

Shipping(배송), PaymentDetail(결제상세) => 유영 </br>
Cart(장바구니), Payment(결제) => 동호 </br>
Product(제품상세) Home(홈)=> 성우 </br>
Login(로그인), SignUp(회원가입), UserProfileUpdate(회원정보수정), Footer(푸터), NavBar(네비게이션바, 관리자 상품 등록 페이지   => 상혁 </br>
</br></br>

### 깃 커밋 (Commit) 규칙 🧨

> "[이모지] <무슨 작업을 했는지 간단명료하게 서술>"
</br>
🎨 => 폴더 파일 구조 개선, 코드 포맷 양식 개선 </br>
⚡️ => 성능 향상 </br>
🔥 => 코드나 파일 삭제</br>
🐛 => 코드 버그 수정</br>
🚑️ => 위급하게 고쳐야 할 때</br>
✨ => 새로운 특성 도입</br>
📝 => (README.md 파일 수정, 추가)</br>
🔀 => 브랜치(branch merge)병합시</br>
⏪️ => 커밋 되돌리기</br>
💄 => UI, css 파일 생성(vue file) & 수정</br>
➕ => 새로운 모듈 도입</br>
➖ => 모듈 삭제</br>
🚚 => 파일, 경로 이름 수정시</br>
🔧 => 구성 파일 수정삭제(eslint or vue.config.js)</br>
🔨 => 개발 스크립트 수정시(package.json)</br>
🚀 => 프로젝트 배포</br>
✏️ => 오타 수정</br>
💬 => 단순 텍스트 입력, 추가</br>


</br>
* 사이트 참조
https://gitmoji.dev/
</br></br>

### 깃 푸쉬 (Commit) && 깃 브랜치 머지 (Merge) 규칙 🚀
1. 자신이 작성한 파일을 적당히 커밋한 후에 반드시 "develop-[본인이니셜]" 로 먼저 푸쉬한다.
2. 본인의 브랜치로 먼저 푸쉬하고 그 다음에 develop 브랜치로 pull requeset를 날리면 된다.
