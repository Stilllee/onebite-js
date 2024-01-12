# To Do List

![image](https://github.com/Stilllee/onebite-js/assets/108785772/ed574bf7-5000-4898-8e2a-9f81e926da3a)

자바스크립트를 이용해 개발한 [To Do List](https://woodstock-todo-list.netlify.app/)입니다.

## 주요 기능
### 1. 할 일추가하기
![chrome_eNvPI8cfR9](https://github.com/Stilllee/onebite-js/assets/108785772/c2946748-72ad-4a1c-acf0-6c06025a6ce2)
- 사용자는 입력 필드에 할 일을 입력하고 '추가' 버튼을 클릭하여 새로운 할 일을 추가할 수 있습니다.
- 추가된 할 일은 `todoList` 배열에 저장되며, 이는 `LocalStorage`에도 저장됩니다.

### 할 일 수정하기
![chrome_uMMqSKX8Nj](https://github.com/Stilllee/onebite-js/assets/108785772/d71513b9-c897-4aff-83a6-753fde1660e9)
- 할 일을 클릭하면 텍스트 필드가 나타나 사용자가 할 일을 수정할 수 있습니다.
- 수정 후에는 엔터 키를 누르거나 다른 곳을 클릭하여 수정을 완료할 수 있습니다.
- 수정된 내용은 `todoList` 또는 `completedList` 배열에 반영되고 `LocalStorage`에도 저장됩니다.

### 3. 할 일 완료 처리 및 취소 처리
![chrome_3xS2zw3ykS](https://github.com/Stilllee/onebite-js/assets/108785772/18cd8857-bd67-4fcf-ab42-d88b3e43ffa6)
- 할 일 옆에 있는 '완료' 버튼을 클릭하면 해당 할 일은 완료된 것으로 표시되고 `completedList` 배열로 이동합니다.
- 이미 완료된 할 일 옆의 '취소' 버튼을 클릭하면 할 일이 다시 `todoList` 배열로 이동합니다.
- 이 변경사항들은 LocalStorage에도 반영됩니다.

### 4. 할 일 삭제하기
![chrome_AYhV2RHEFd](https://github.com/Stilllee/onebite-js/assets/108785772/573d6714-ae6d-4d12-8c06-b2fc1e23799e)
- 각 할 일 옆에 있는 '삭제' 버튼을 클릭하여 특정 할 일을 삭제할 수 있습니다.
- 사용자가 삭제를 확인하면, 해당 항목은 `todoList` 또는 `completedList` 배열에서 제거되고 `LocalStorage`에서도 업데이트됩니다.

### 5. 할 일 목록 렌더링
![chrome_pBP2eBqCeI](https://github.com/Stilllee/onebite-js/assets/108785772/73a57fe8-5310-4480-af9e-4bc1c29014c2)
- 페이지가 로드될 때, `LocalStorage`에서 저장된 `todoList`와 `completedList` 배열의 내용을 읽어와 할 일 목록을 화면에 렌더링합니다.
