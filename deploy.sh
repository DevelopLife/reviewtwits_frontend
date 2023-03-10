#!/usr/bin/env bash

REPOSITORY=/home/ubuntu/app

cd $REPOSITORY

echo "> 현재 구동 중인 애플리케이션 pid 확인"

CURRENT_PID=$(lsof -i :3000 | grep node | awk '{print $2}')

echo "현재 구동 중인 애플리케이션 pid: $CURRENT_PID"

if [ -z "$CURRENT_PID" ]; then
  echo "현재 구동 중인 애플리케이션이 없으므로 종료하지 않습니다."
else
  echo "> kill -15 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 5
fi

echo "> 새 애플리케이션 배포"

export PATH = /home/ubuntu/.yarn/bin

yarn install

yarn start >> $REPOSITORY/nohup.out 2>&1 &