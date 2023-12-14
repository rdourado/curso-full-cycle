FROM golang:latest AS builder

WORKDIR /usr/src/app

COPY go.mod ./
RUN go mod download && go mod verify

COPY fullcycle.go ./
RUN go build

FROM scratch

COPY --from=builder /usr/src/app /

CMD [ "/fullcycle" ]
