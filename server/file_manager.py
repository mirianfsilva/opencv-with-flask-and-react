import os

class FileManager:

    @staticmethod
    def create_check(file_path):
        try:
            f = open(file_path, 'r')
        except FileNotFoundError:
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            f = open(file_path, 'w')
        f.close()
        return file_path

    @staticmethod
    def clear_file(file_path):
        FileManager.create_check(file_path)
        with open(file_path, "w") as fw:
            fw.write("")

    @staticmethod
    def write_append(line, file_path, end_with_new_line=False):
        FileManager.create_check(file_path)

        line_as_str = str(line)
        if end_with_new_line:
            line_as_str = line_as_str + "\n"

        with open(file_path, "a") as fw:
            fw.write(line_as_str)

    @staticmethod
    def read_lines_string_html(file_path):
        lines = FileManager.read_lines(file_path)
        as_string = ""
        for line in lines:
            line = line.replace("\n", "<br/>")
            as_string += line
        return as_string

    @staticmethod
    def read_lines(file_path):
        all_lines = None
        with open(file_path, "r") as f:
            all_lines = f.readlines()
        return all_lines