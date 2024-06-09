FROM python:3.12.4-bookworm
WORKDIR /backend
COPY . /backend
RUN pip install --no-cache-dir -r requirements.txt
CMD ["fastapi", "run"]